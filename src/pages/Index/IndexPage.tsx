import styles from "pages/Index/IndexPage.module.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { useAppSelector } from "app/hooks";
import { selectArticlesData, selectAllTags } from "app/articlesSlice";
import { LoginType, selectLoginType } from "app/adminSlice";

import { validPageLink, dictionaryUpdateKey } from "utils/functions";

interface TagFilter {
  filterName: string;
  active: boolean;
}

interface FilterSettings {
  draftStatus: boolean;
  tagFilters: TagFilter[];
}

interface IndexFilterProperties {
  filterSettings: FilterSettings;
  updateFilters: {
    updateTagFilter: (id: string, newValue: boolean) => void,
  };
}

// I would've made a foldable component atm, but maybe I don't want it exactly
// identical, so I'll just replicate it for now since it's not very difficult
// to do it, and it'll be self-contained.
function IndexFilter({ filterSettings, updateFilters }: IndexFilterProperties) {
  const [foldedStatus, updateFoldedStatus] = useState(false);

  return (<>
    <div id={styles.indexFilter}>
      <div
        id={styles.filterFoldHeader}
        onClick={() =>
          updateFoldedStatus(!foldedStatus)
        }
      >
        <p>Tag Filters:</p>
        <div className={`material-icons + ${foldedStatus ? styles.folded : ""}`}>
          expand_more
        </div>
      </div>

      {(!foldedStatus) && (
        <div id={styles.filterList}>
          {
            filterSettings.tagFilters.map(({ filterName, active }) =>
              <div key={filterName}>
                <input type="checkbox"
                  value={filterName}
                  checked={active}
                  onChange={(event) => {
                    updateFilters.updateTagFilter(filterName, event.target.checked);
                  }}
                />
                <label htmlFor={filterName}>{filterName}</label>
              </div>
            )
          }
        </div>
      )}
    </div>
  </>);
}

function IndexPage() {
  const articlesData = useAppSelector(selectArticlesData);
  const allTags = useAppSelector(selectAllTags);
  const [filterSettings, updateFilterSettings] = useState({ draftStatus: false, tagFilters: [] as TagFilter[] });

  useEffect(
    function () {
      updateFilterSettings(
        {
          draftStatus: false,
          tagFilters: allTags.map((tag) => { return { filterName: tag, active: false }; })
        }
      );
    },
    [allTags]);

  const currentLoginType = useAppSelector(selectLoginType);
  const isAdmin = currentLoginType === LoginType.Admin;

  return (
    <div className={styles.index}>
      <h2>Index Page</h2>
      <IndexFilter
        filterSettings={filterSettings}
        updateFilters={
          {
            updateTagFilter: function (id: string, v: boolean) {
              updateFilterSettings(
                dictionaryUpdateKey(
                  filterSettings,
                  ["tagFilters"],
                  function (filterArray) {
                    for (const filter of filterArray as TagFilter[]) {
                      if (filter.filterName === id) {
                        filter.active = v;
                        break;
                      }
                    }
                    return filterArray;
                  }
                ) as FilterSettings
              );
            }
          }
        }
      />
      {
        ((isAdmin) ?
          articlesData.articles :
          articlesData.articles.filter(({ draftStatus }) => !draftStatus)).
          filter(function ({ tags }) {
            let result = function () {
              for (const tagFilter of filterSettings.tagFilters) {
                if (tagFilter.active) return false;
              }
              return true;
            }();

            if (!result) {
              for (const tagFilter of filterSettings.tagFilters) {
                if (tags) {
                  for (const tag of tags) {
                    if (tagFilter.filterName === tag) {
                      // babel can't do ||=????
                      result = result || tagFilter.active;
                    }
                  }
                }
              }
            }

            return result;
          }).
          map(({ name, draftStatus }) => (
            <p key={name} >
              <Link to={validPageLink(name)}>
                {(draftStatus) ? "[DRAFT*] " + name : name}
              </Link>
            </p>
          ))
      }
    </div>
  );
}

export default IndexPage;
