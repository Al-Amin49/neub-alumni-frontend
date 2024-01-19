import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

const SystemDesignPDF = () => (
  <Document>
    <Page>
      <Text>System Design Book 1</Text>
      <Text>System Design Book 2</Text>
      <Text>System Design Book 3</Text>
    </Page>
  </Document>
);

export default SystemDesignPDF;