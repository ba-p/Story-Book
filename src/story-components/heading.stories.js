import React from 'react';
import { stories, storiesOf } from '@storybook/react'
import { Typography } from 'antd';
import "antd/dist/antd.css";
const { Title } = Typography;

storiesOf('Heading', module)
    .add(
        'Heading',
        () => (
            <div>
                <Title>h1. Test</Title>
                <Title level={2}>h2. Test</Title>
                <Title level={3}>h3. Test</Title>
                <Title level={4}>h4. Test</Title>
            </div>
        )
    )