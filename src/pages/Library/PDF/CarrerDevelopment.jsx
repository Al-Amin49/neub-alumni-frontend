import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

const CareerDevelopmentPDF = () => (
  <Document>
    <Page>
      <Text>Career Development Book 1</Text>
      <Text>Career Development Book 2</Text>
      <Text>Career Development Book 3</Text>
    </Page>
  </Document>
);

export default CareerDevelopmentPDF;