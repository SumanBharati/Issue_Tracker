'use client';

import React from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { TextField, Button } from '@radix-ui/themes';

const NewIssuePage = () => {
  return (
    <div className='max-w-[50rem] space-y-3'>
        <TextField.Root placeholder='Title' />
        <SimpleMDE placeholder='Description' />
        <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage