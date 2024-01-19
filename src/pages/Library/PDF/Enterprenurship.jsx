import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

const EntrepreneurshipPDF = () => (
  <Document>
    <Page>
      <Text>Entrepreneurship Book A</Text>
      <Text>Entrepreneurship Book B</Text>
      <Text>Entrepreneurship Book C</Text>
    </Page>
  </Document>
);

export default EntrepreneurshipPDF;
