import React from 'react';
import { stories, storiesOf } from '@storybook/react'
import BookList from '../components/BookList';
import "antd/dist/antd.css";



const books = [{"_id":"5ea98d9df3006387a0e31fdd",
                "title":"Terminal USA",
                "description":"odio consequat varius integer ac ro nlvinar nulla",
                "coverUrl":"https://loremflickr.com/320/240"},
                {"_id":"5ea98da7f3006387a0e31fe2",
                "title":"Wendy and Lucy",
                "description":"dolor quis odio i nam uln mattis",
                "coverUrl":"https://loremflickr.com/320/240"}]

                
storiesOf('BookList', module)
    .add(
        'Table',
        () => (
            <BookList className="table" books={books} />
        )
    )

