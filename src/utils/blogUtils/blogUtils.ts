import axios from "axios";
import { BlockMapType } from "react-notion";
import { BlogTableEntry } from "../../types";

export const fetchNotionPageData = async (
  pageID: string
): Promise<BlockMapType | undefined> => {
  try {
    const res = await axios.get(
      `https://notion-api.splitbee.io/v1/page/${pageID}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const fetchNotionTableData = async (
  tableID: string
): Promise<BlogTableEntry[] | undefined> => {
  try {
    const res = await axios.get(
      `https://notion-api.splitbee.io/v1/table/${tableID}`
    );
    return parseNotionTableData(res.data);
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const parseNotionTableData = (data: any): BlogTableEntry[] => {
  return data.map((entry: any) => {
    return {
      id: entry.id ? entry.id : "no-id",
      date: entry.date ? new Date(entry.date) : new Date(),
      title: entry.title ? entry.title : "Untitled",
      preview: entry.preview ? entry.preview : "",
      readingLength: entry.readingLength ? entry.readingLength : 0,
      tags: entry.tags ? entry.tags : [],
    };
  });
};
