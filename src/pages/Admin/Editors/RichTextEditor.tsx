import { useState, useRef, KeyboardEventHandler, } from 'react';
import { preprocessMarkdown } from 'utils/preprocessMarkdown';
import { uploadImage, retrieveImageData } from 'utils/functions';

import { renderMarkdown } from "components/Article/MarkdownRender";
import { renderDomAsMarkdown } from 'utils/DOMIntoMarkdown';
import { dictionaryUpdateKeyNested } from 'utils/functions';
import { widgets, toggleWidgetActiveState, flattenWidgetStateTypes, WidgetCategory } from './RichTextEditWidgetInformation';

import { Article } from 'app/articlesSlice';

import bottomToolbarStyle from './bottomToolbar.module.scss';
import richWidgetBarStyle from './richWidgetBar.module.scss';
import styles from 'pages/Admin/Admin.module.scss';
import articleStyles from 'components/Article/Article.module.scss';
import Button from 'components/Form/Button';

function fileHandlerOnChange({ target }: Event): void {
  const probablyFile = (target as HTMLInputElement).files?.[0];

  if (probablyFile)
    retrieveImageData(probablyFile,
      function (imgData) {
        uploadImage(imgData).then(
          function (imgURL) {
            if (imgURL.success) {
              document.execCommand("insertImage", false, imgURL.data.url);
            } else {
              console.error("IMGBB is down. Tony pls get us a server");
            }
          }
        );
      });
}

function editorHandleKeybindings({
  saveDocument,
  toggleWidget,
  executeRichTextCommand,
  updateDirtyFlag
}: {
  saveDocument: () => void,
  toggleWidget: (widgetId: string, categoryValue?: string) => void,
  executeRichTextCommand: (command: string, argument?: string) => void,
  updateDirtyFlag: React.Dispatch<boolean>,
}): KeyboardEventHandler<HTMLDivElement> {
  return function (event) {
    const { key, shiftKey, ctrlKey } = event;
    let disableDefaultBehavior = false;
    if (ctrlKey) {
      if (!shiftKey) {
        switch (key) {
          case 's':
            saveDocument();
            disableDefaultBehavior = true;
            break;
          case 'b':
            toggleWidget("bold");
            executeRichTextCommand("bold");
            disableDefaultBehavior = true;
            break;
          case 'i':
            toggleWidget("italic");
            executeRichTextCommand("italic");
            disableDefaultBehavior = true;
            break;
          case 'u':
            toggleWidget("underline");
            executeRichTextCommand("underline");
            disableDefaultBehavior = true;
            break;
          case '1': case '2': case '3': case '4': case '5': case '6':
            toggleWidget(`h${key}`, "heading");
            executeRichTextCommand("heading", `H${key}`);
            disableDefaultBehavior = true;
            break;
        }
      } else {
        console.log("CTRL and SHIFT", key);
        switch (key) {
          case 'U':
            console.log("unordered list");
            executeRichTextCommand("insertunorderedlist");
            disableDefaultBehavior = true;
            break;
          case 'O':
            executeRichTextCommand("insertorderedlist");
            disableDefaultBehavior = true;
            break;
        }
      }
    }

    if (disableDefaultBehavior) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      updateDirtyFlag(true);
    }
  };
}

export function RichTextEditor({
  submissionHandler,
  currentArticle,
  updateDirtyFlag,
  toggleDraftStatus
}:
  {
    submissionHandler: (f: { name: string, content: string; }) => void,
    currentArticle?: Article,
    updateDirtyFlag: React.Dispatch<React.SetStateAction<boolean>>,
    toggleDraftStatus: () => void,
  }) {
  const [initialArticleState, _] = useState(currentArticle);
  const editableTitleDOMRef = useRef<HTMLHeadingElement>(null);
  const editableAreaDOMRef = useRef<HTMLDivElement>(null);

  document.execCommand("defaultParagraphSeparator", false, "br");
  const [widgetStates, updateWidgetState] = useState(widgets);

  function saveDocument() {
    if (editableAreaDOMRef.current && editableTitleDOMRef.current) {
      const markdownText = renderDomAsMarkdown(editableAreaDOMRef.current);
      submissionHandler({ name: (initialArticleState) ? initialArticleState.name : (editableTitleDOMRef.current.textContent || ""), content: markdownText });

      if (initialArticleState === undefined) {
        editableAreaDOMRef.current.innerHTML = renderMarkdown(preprocessMarkdown(markdownText));
      }
    }
  }

  // would only apply to a few relevant states.
  function _toggleWidgetActiveState(widgetId: string, categoryValue?: string) {
    updateWidgetState(toggleWidgetActiveState(widgetStates, widgetId, categoryValue));
  }

  function _flattenWidgetStateTypes() {
    return flattenWidgetStateTypes(widgetStates);
  }

  function executeRichTextCommand(commandName: string, optionalArgument?: string) {
    if (editableAreaDOMRef.current) {
      if (commandName === "@_insertImage") {
        console.log("image handling");
        const fileDialog = document.createElement("input");
        fileDialog.type = "file";
        fileDialog.click();

        // TODO(jerry): cleanup
        fileDialog.addEventListener("change", fileHandlerOnChange);
      } else {
        document.execCommand(commandName, false, optionalArgument);
        editableAreaDOMRef.current.focus();
      }
    }
  }

  function queryRichTextCommand(command: string, wantedValue?: boolean) {
    if (wantedValue) {
      return document.queryCommandValue(command);
    } else {
      return document.queryCommandState(command);
    }
  }

  function synchronizeCommandStateToWidgetBar() {
    updateWidgetState(
      Object.keys(widgetStates).reduce(
        (newWidgetState, type) => {
          return dictionaryUpdateKeyNested(newWidgetState, [type, "active"],
            (type === "heading") ?
              () => queryRichTextCommand(type, true) :
              () => queryRichTextCommand(type) ? type : null
          );
        }, widgetStates)
    );
  }

  const editModeInlineStyle = {
    borderColor: "black",
    borderWidth: "1px",
    margin: "0.3em",
    borderStyle: "solid",
  };

  return (
    <>
      <div className={richWidgetBarStyle.main}> {/*requires styling*/}
        {
          Object.entries(_flattenWidgetStateTypes()).map(
            ([widgetId, widget]) =>
              <button
                key={widgetId}
                id={widgetId}
                className={
                  ((widgetStates[(widget.category !== undefined) ?
                    widget.category : widgetId].active) === widgetId) ?
                    richWidgetBarStyle.active : richWidgetBarStyle.button
                }
                onClick={
                  (_) => {
                    _toggleWidgetActiveState(widgetId, widget.category);
                    executeRichTextCommand(widget.command, widget.argument);
                  }
                }>{(widget.display) ? widget.display : widget.name}
              </button>
          )
        }
      </div>
      <h1
        className={styles.title}
        contentEditable={(initialArticleState) ? "false" : "true"}
        ref={editableTitleDOMRef}
      >
        {(currentArticle) ? currentArticle.name : "Edit New Title"}
      </h1>
      <div style={editModeInlineStyle}>
        <div
          contentEditable={true}
          className={articleStyles.article}
          onSelect={synchronizeCommandStateToWidgetBar}
          onKeyDown={editorHandleKeybindings({
            saveDocument: saveDocument,
            toggleWidget: _toggleWidgetActiveState,
            executeRichTextCommand: executeRichTextCommand,
            updateDirtyFlag: updateDirtyFlag,
          })}
          dangerouslySetInnerHTML={
            { __html: renderMarkdown(preprocessMarkdown((initialArticleState) ? initialArticleState.content : "Begin typing your article.")) }
          }
          ref={editableAreaDOMRef}>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className={bottomToolbarStyle.main}>
        <Button onClick={() => { toggleDraftStatus(); }}>
          Toggle Draft Status
        </Button>
        <Button onClick={saveDocument}>
          {(initialArticleState)
            ? "Save Article"
            : "Submit Article"}
        </Button>
      </div>
    </>
  );
}