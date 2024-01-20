import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

const EntrepreneurshipPDF = ({resources}) => (
  <Document>
  <Page>
    {resources.map((resource, index) => (
      <Text key={index}>{resource.title}</Text>
    ))}
  </Page>
</Document>
);

export default EntrepreneurshipPDF;
