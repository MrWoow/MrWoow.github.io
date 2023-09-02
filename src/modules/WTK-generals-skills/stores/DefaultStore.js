import { defineStore } from "pinia";
import generalList from "@WTK/assets/data/general_list.json";
import tagList from "@WTK/assets/data/tag_list.json";
import keywordList from "@WTK/assets/data/keyword_list.json";

export default defineStore("WTK", {
  "state": () => ({
    "generalList": [],
    "tagList": [],
    "keywordList": []
  }),
  "actions": {
    initialize() {
      this.generalList = generalList;
      this.tagList = tagList;
      this.keywordList = keywordList;
    }
  }
});
