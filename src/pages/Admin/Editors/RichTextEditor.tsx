import React, { useState, useRef, KeyboardEventHandler, useEffect, createRef, } from "react";
import { preprocessMarkdown } from "utils/preprocessMarkdown";
import { uploadImage, retrieveImageData } from "utils/functions";

import { renderMarkdown } from "components/Article/MarkdownRender";
import { renderDomAsMarkdown } from "utils/DOMIntoMarkdown";
import { dictionaryUpdateKeyNested } from "utils/functions";
import { widgets, toggleWidgetActiveState, flattenWidgetStateTypes, WidgetCategory } from "./RichTextEditWidgetInformation";

import { Article } from "app/articlesSlice";
import Input from "components/Form/Input";

import bottomToolbarStyle from "./bottomToolbar.module.scss";
import editorStyle from "./RichTextEditor.module.scss";
import articleStyles from "components/Article/Article.module.scss";
import Button from "components/UI/Button";

function executeRichTextCommand(commandName: string, optionalArgument?: string) {
  if (commandName === "@_insertImage") {
    console.log("image handling");
    const fileDialog = document.createElement("input");
    fileDialog.type = "file";
    fileDialog.click();

    // TODO(jerry): cleanup
    fileDialog.addEventListener("change", fileHandlerOnChange);
  } else {
    document.execCommand(commandName, false, optionalArgument);
  }
}

function queryRichTextCommand(command: string, wantedValue?: boolean) {
  if (wantedValue) {
    return document.queryCommandValue(command);
  } else {
    return document.queryCommandState(command);
  }
}

function fileHandlerOnChange({ target }: Event): void {
  const probablyFile = (target as HTMLInputElement).files?.[0];

  if (probablyFile)
    retrieveImageData(probablyFile,
      function (imgData) {
        uploadImage(imgData).then(
          function (imgURL) {
            if (imgURL.success) {
              document.execCommand("insertImage", false, imgURL.data.url);
              document.execCommand("insertParagraph");
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
        case "s":
          saveDocument();
          disableDefaultBehavior = true;
          break;
        case "b":
          toggleWidget("bold");
          executeRichTextCommand("bold");
          disableDefaultBehavior = true;
          break;
        case "i":
          toggleWidget("italic");
          executeRichTextCommand("italic");
          disableDefaultBehavior = true;
          break;
        case "u":
          toggleWidget("underline");
          executeRichTextCommand("underline");
          disableDefaultBehavior = true;
          break;
        case "1": case "2": case "3": case "4": case "5": case "6":
          toggleWidget(`h${key}`, "heading");
          executeRichTextCommand("heading", `H${key}`);
          disableDefaultBehavior = true;
          break;
        }
      } else {
        console.log("CTRL and SHIFT", key);
        switch (key) {
        case "U":
          console.log("unordered list");
          executeRichTextCommand("insertunorderedlist");
          disableDefaultBehavior = true;
          break;
        case "O":
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

interface EditorToolbarProperties {
  toggleDraftStatus: () => void,
  saveDocument: () => void,
  isInitial: boolean,
}

// TODO better name.
function EditorToolbar({ toggleDraftStatus, saveDocument, isInitial }: EditorToolbarProperties) {
  return (<div className={bottomToolbarStyle.main}>
    <Button onClick={() => { toggleDraftStatus(); }}>
      Toggle Draft Status
    </Button>
    <Button onClick={saveDocument}>
      {(isInitial) ? "Save Article" : "Publish Article"}
    </Button>
  </div>);
}

function TagDisplay({ id, name, removeTag }: { id: string, name: string, removeTag: (id: string) => void }) {
  return (
    <div className={editorStyle.tageditor_tag}>
      <span>
        <button onClick={(_) => removeTag(id)}>&times;</button>
      </span>
      {name}</div>
  );
}

interface ArticleTagEditorProperties {
  tags: string[];
  setTagState: React.Dispatch<string[]>;
}

function ArticleTagEditor({ tags, setTagState }: ArticleTagEditorProperties) {
  const [input, setInput] = useState("");

  function removeTagById(id: string) {
    setTagState(tags.filter((tagName) => id !== tagName));
  }

  return (
    <div
      className={editorStyle.tageditor}>
      <button
        className={editorStyle.button}
        onClick={() => setTagState([])}
      >Clear</button>
      {tags?.map((tag) => <TagDisplay removeTag={removeTagById} key={tag} id={tag} name={tag} />)}
      <input
        value={input}
        onChange={
          function (event) {
            setInput(event.target.value);
          }
        }
        onKeyDown={
          function ({ key }) {
            if (key === "Backspace" && input.length === 0) {
              setTagState(tags?.slice(0, tags.length - 1));
            } else if (key === "Enter" && input.length > 0) {
              // too lazy to google for proper function.
              const doesIndexAlreadyExist = tags?.indexOf(input) !== -1;
              if (!doesIndexAlreadyExist) {
                setTagState(tags?.concat([input]));
                setInput("");
              }
            }
          }
        }
      ></input>
    </div>
  );
}

interface ImageContextSettingsProperties {
  closeShownStatus: () => void,
  imageRef: React.RefObject<HTMLImageElement>,
}

enum ImageDimensionsType {
  Custom,
  Default,
}

enum LayoutFloatMode {
  Left,
  Center,
  Right,
}

function ImageContextSettings(properties: ImageContextSettingsProperties) {
  const imageObject = properties.imageRef?.current;

  const [imageCaptionText, setImageCaptionText] = useState("");
  // unused
  const [alternateImageText, setAlternateImageText] = useState("");

  const [layoutFloatMode, setLayoutFloatMode] = useState(LayoutFloatMode.Left);
  const [imageDimensionType, setImageDimensionType] = useState(ImageDimensionsType.Default);
  const [imageDimensionCustomWidth, setImageDimensionCustomWidth] = useState(imageObject?.width || 150);
  const [imageDimensionCustomHeight, setImageDimensionCustomHeight] = useState(imageObject?.height || 150);

  function applyChanges() {
    console.log("Begin applying changes");
    if (imageObject) {
      if (imageDimensionType === ImageDimensionsType.Custom) {
        imageObject.width = imageDimensionCustomWidth || imageObject.width;
        imageObject.height = imageDimensionCustomHeight || imageObject.height;
      }

      imageObject.classList.forEach((e) => imageObject.classList.remove(e));
      switch (layoutFloatMode) {
      case LayoutFloatMode.Left:
        imageObject.classList.add(articleStyles.floatLeft);
        break;
      case LayoutFloatMode.Center:
        imageObject.classList.add(articleStyles.floatCenter);
        break;
      case LayoutFloatMode.Right:
        imageObject.classList.add(articleStyles.floatRight);
        break;
      }

      console.log(imageObject.classList);
    }

    console.log("end of apply changes");
    properties.closeShownStatus();
  }

  // This is being done as dirty as possible because I just need it to work.
  // although you can autogenerate the UI from the objects.
  return (
    <div id={editorStyle.blotOut}>
      <div id={editorStyle.imageContextSettingsWindow}>
        <h1>Image Settings <a onClick={(_) => properties.closeShownStatus()} className={editorStyle.xOut}>X</a></h1>
        <div style={{ margin: "2.5em" }}>
          <p style={{textAlign: "center"}}><i>{imageObject?.src}</i></p>
          <div className={editorStyle.imagePreview} dangerouslySetInnerHTML={{
            __html:
              function () {
                if (imageObject) {
                  return `<img src=${imageObject.src}></img>`;
                } else {
                  return "<p>no image</p>";
                }
              }()
          }} />
          {/* Float Type */}
          <div>
            <a onClick={
              (e) => { setLayoutFloatMode(LayoutFloatMode.Left); }
            }>Left</a>
            <br></br>
            <a onClick={
              (e) => { setLayoutFloatMode(LayoutFloatMode.Center); }
            }>Center</a>
            <br></br>
            <a onClick={
              (e) => { setLayoutFloatMode(LayoutFloatMode.Right); }
            }>Right</a>
          </div>
          <hr></hr>
          {/* Dimension Type */}
          <div>
            <a onClick={
              (e) => { setImageDimensionType(ImageDimensionsType.Default); }
            }>Default</a>
            <br></br>
            <a onClick={
              (e) => { setImageDimensionType(ImageDimensionsType.Custom); }
            }>Custom</a>
          </div>
          {
            (imageDimensionType === ImageDimensionsType.Custom) ?
              <div>
                <label>Width: </label>
                <input
                  value={imageDimensionCustomWidth}
                  onChange={(e) => setImageDimensionCustomWidth(Number.parseInt(e.target.value))}
                  type="number"></input>
                <br></br>
                <label>Height: </label>
                <input
                  value={imageDimensionCustomHeight}
                  onChange={(e) => setImageDimensionCustomHeight(Number.parseInt(e.target.value))}
                  type="number"></input>
              </div>
              : <></>
          }
          {/*Caption Text*/}
          <Input 
            label="Image Caption"
            changeHandler={
              function (e) {
                setImageCaptionText(e.target.value);
              }
            }
            value={imageCaptionText} />
          <Input 
            label="Alternate Text"
            changeHandler={
              function (e) {
                setAlternateImageText(e.target.value);
              }
            }
            value={alternateImageText} />
        </div>
        <div className={editorStyle.alignToBottom}>
          <button onClick={applyChanges}>Apply Changes</button>
        </div>
      </div>
    </div>
  );
}

export function RichTextEditor({
  submissionHandler,
  currentArticle,
  updateDirtyFlag,
  toggleDraftStatus
}:
  {
    submissionHandler: (f: { name: string, tags: string[], content: string; }) => void,
    currentArticle?: Article,
    updateDirtyFlag: React.Dispatch<React.SetStateAction<boolean>>,
    toggleDraftStatus: () => void,
  }) {
  const [initialArticleState, _] = useState(currentArticle);
  const [tagEditorShown, setTagEditorVisibility] = useState(true);
  const [imageContextEditorShown, setImageContextEditorVisibility] = useState(false);
  const [tags, setTagState] = useState((currentArticle?.tags) || []);

  const editableTitleDOMRef = useRef<HTMLHeadingElement>(null);
  const editableAreaDOMRef = useRef<HTMLDivElement>(null);
  const currentImageRef = useRef<HTMLImageElement>(null);

  useEffect(
    function () {
      if (editableAreaDOMRef.current) {
        editableAreaDOMRef.current.onmousedown =
          function (e) {
            const imageTarget = e.target as HTMLElement;
            if (imageTarget?.tagName === "IMG") {
              /*
                I do not know of a way to get a ref into newly generated
                HTML, so we can't exactly do this in a very React way.
  
                The only other thing I could think of is generating react friendly
                mark-up, but I don't want a ref to every single element, but I could
                probably do it with
  
                onClick for all of the images to set a "currentFocusedImage" to whatever
                was clicked on, which would suffice.
  
                I'm pretty sure markdown-it exposes an "AST" sort of thing so I can get
                that to generate JSX which can use the above. That's later though.
              */
              // @ts-expect-error
              currentImageRef.current = imageTarget;
              setImageContextEditorVisibility(true);
            }
          };
      }
    }
    , [editableAreaDOMRef]);

  document.execCommand("defaultParagraphSeparator", false, "br");
  const [widgetStates, updateWidgetState] = useState(widgets);

  function saveDocument() {
    if (editableAreaDOMRef.current && editableTitleDOMRef.current) {
      const markdownText = renderDomAsMarkdown(editableAreaDOMRef.current);
      submissionHandler({
        name: (initialArticleState?.name) || (editableTitleDOMRef.current.textContent || ""),
        content: markdownText,
        tags: tags
      });

      if (initialArticleState === undefined) {
        editableAreaDOMRef.current.innerHTML = renderMarkdown(preprocessMarkdown(markdownText).processed);
      }
    }
  }

  // would only apply to a few relevant states.
  function _toggleWidgetActiveState(widgetId: string, categoryValue?: string) {
    updateWidgetState(toggleWidgetActiveState(widgetStates, widgetId, categoryValue));
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

  return (
    <>
      <h1
        className={articleStyles.title}
        contentEditable={(initialArticleState) ? "false" : "true"}
        ref={editableTitleDOMRef}
      >
        {(currentArticle) ? currentArticle.name : "Edit New Title"}
      </h1>
      <div>
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
            { __html: renderMarkdown(preprocessMarkdown((initialArticleState) ? initialArticleState.content : "Begin typing your article.").processed) }
          }
          ref={editableAreaDOMRef}>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className={editorStyle.widgetbar}> {/*requires styling*/}
        <button style={{ float: "left", marginLeft: "3em" }}
          className={editorStyle.button}
          onClick={() => setTagEditorVisibility(!tagEditorShown)}>
          Toggle Tag Editor</button>
        {
          Object.entries(flattenWidgetStateTypes(widgetStates)).map(
            ([widgetId, widget]) =>
              <button
                key={widgetId}
                id={widgetId}
                className={
                  ((widgetStates[(widget.category !== undefined) ?
                    widget.category : widgetId].active) === widgetId) ?
                    editorStyle.active : editorStyle.button
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
        <button style={{ float: "right", marginRight: "3em" }}
          className={editorStyle.button}
        >Set as Featured Article</button>
        {(tagEditorShown) ? <ArticleTagEditor setTagState={setTagState} tags={tags} /> : <></>}
      </div>
      <EditorToolbar isInitial={(!!initialArticleState)} saveDocument={saveDocument} toggleDraftStatus={toggleDraftStatus} />
      { (imageContextEditorShown) ?
        <ImageContextSettings imageRef={currentImageRef} closeShownStatus={() => { setImageContextEditorVisibility(false); }} /> : <></>}
    </>
  );
}
