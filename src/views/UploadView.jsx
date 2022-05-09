import { useCallback, useEffect, useState } from 'react';
import { useLang } from 'hooks';

import { Container, Section } from 'components/common';

import styled from 'styled-components';

import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import { SectionTitle } from 'components/common/Section/Section.styled';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const UploadContainer = styled(Container)``;
const UploadForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 30px;
`;

const { log, error } = console;

const getColor = ({ isDragAccept, isDragReject, isFocused }) => {
  if (isFocused) return '#2196f3';
  if (isDragAccept) return '#00e676';
  if (isDragReject) return '#ff1755';
  return '#eeeeee';
};

const DropArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 80px;
  padding: 20px;

  color: #888888;
  text-align: center;

  background-color: #fafafa;
  border: 2px dashed ${props => getColor(props)};
  outline: none;

  :hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  transition: border-color ${({ theme }) => theme.transition};
`;

const acceptedFileItems = acceptedFiles =>
  acceptedFiles.map(file => (
    <li key={file.path}>
      {console.log(file.path)}
      {file.path} - {Math.ceil(file.size / 1000)} KB
    </li>
  ));

const rejectedFileItems = rejectedFiles =>
  rejectedFiles.map(({ file, errors }) => (
    <li key={file.path}>
      {console.log({ name: file.name, path: file.path })}
      {file.path} - {Math.ceil(file.size / 1000)} KB
      <ul>
        {errors.map(e => (
          <li key={e.code}>
            {console.log(e.code)}
            {e.message}
          </li>
        ))}
      </ul>
    </li>
  ));

const ThumbsContainer = styled.aside``;

const ThumbList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
`;

const Thumb = styled.li`
  display: inline-flex;
  width: 100px;
  height: 100px;
  padding: 4px;
  margin-right: 8px;
  margin-bottom: 8px;

  border: 1px solid #eaeaea;
  border-radius: 2px;

  transition: transform ${({ theme }) => theme.transition};

  :hover,
  :focus {
    transform: scale(3);
  }
`;

const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
  contain: content;
`;

const Img = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

const thumbItems = files =>
  files.map(file => (
    <Thumb key={file.path}>
      {console.log({ thumb: file.path })}
      <ThumbInner>
        <Img
          src={file.preview}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt={file.path}
        />
      </ThumbInner>
    </Thumb>
  ));

const FileDropArea = ({ files, setFiles }) => {
  const onDrop = useCallback(
    acceptedFiles => {
      setFiles(
        acceptedFiles.map(file => ({
          ...file,
          preview: URL.createObjectURL(file),
        }))
      );
    },
    [setFiles]
  );

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    onDrop,
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <>
      <DropArea {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        {isDragActive && <p>Drop the files here</p>}
        {isDragAccept && <p>All files will be accepted</p>}
        {isDragReject && <p>Some files will be rejected</p>}

        {!isDragActive && (
          <>
            <p>Drag 'n' drop some files here, or click to select files</p>
            <em>(*.jpeg and *.png images)</em>
          </>
        )}
      </DropArea>

      <ThumbsContainer>
        {acceptedFiles?.length > 0 && (
          <ThumbList>{thumbItems(files)}</ThumbList>
        )}

        {acceptedFiles?.length > 0 && (
          <>
            <h3>Accepted files</h3>

            <ul>{acceptedFileItems(acceptedFiles)}</ul>
          </>
        )}

        {fileRejections?.length > 0 && (
          <>
            <h3>Rejected files</h3>
            <ul>{rejectedFileItems(fileRejections)}</ul>
          </>
        )}
      </ThumbsContainer>
    </>
  );
};

const ContactsView = () => {
  const lang = useLang();
  const [files, setFiles] = useState([]);

  const onSubmitUpload = useCallback(
    async e => {
      e.preventDefault();
      const form = e.target;
      // const file = form.elements.file.files[0];
      console.log({ files });

      if (!files.length) {
        return toast.error('Please add file');
      }

      const formData = new FormData();
      files.forEach(file => formData.append('image', file, file.name));

      try {
        await axios.post('/upload', formData).then(log).catch(error);
      } catch (error) {
        console.log(error);
      }
      form.reset();
    },
    [files]
  );

  return (
    <Section>
      <UploadContainer>
        <SectionTitle>{lang.upload}</SectionTitle>

        <UploadForm onSubmit={onSubmitUpload}>
          <FileDropArea files={files} setFiles={setFiles} />

          <Button type="submit" variant="contained">
            {lang.uploadView.addFileButtonLabel}
          </Button>
        </UploadForm>
      </UploadContainer>
    </Section>
  );
};

ContactsView.propTypes = {};

export default ContactsView;
