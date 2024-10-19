import { defineEventHandler, readBody } from 'h3';
import { createObjectCsvWriter } from 'csv-writer';
import fs from 'fs';
import path from 'path';

const csvFilePath = path.resolve('./data.csv');

const csvWriter = createObjectCsvWriter({
  path: csvFilePath,
  header: [
    { id: 'id', title: 'ID' },
    { id: 'goodOrBad', title: 'Good or Bad' },
    { id: 'type', title: 'Type' },
  ],
  append: false, 
});

export default defineEventHandler(async (event) => {
  const { id, goodOrBad, type } = await readBody(event);

  await csvWriter.writeRecords([{ id, goodOrBad, type }]);

  return { message: 'Data saved successfully' };
});
