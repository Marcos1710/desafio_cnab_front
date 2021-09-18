import React, { useState, useRef } from "react";
import "./styles.css";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import {
  Button,
  Form,
  Breadcrumb,
  Grid,
  Placeholder,
  Message,
  Confirm
} from "semantic-ui-react";

import { cnabsApi } from '../../services/cnabs'

import Main from "../../components/Main";

function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); 
  const [serverError, setServerError] = useState(false);
  const [state, setState] = useState(false);
  const [fileName, setFileName] = useState("")

  const dispatch = useDispatch();
  const history = useHistory();
  const filesElement = useRef(null);
 
  const sections = [
    { key: "arquivo", content: "arquivo" },
    { key: "enviar", content: "enviar" },
  ];

  const handleConfirm = () => {
    cnabsApi.read(fileName).then(() => {
      setFileName("")
      history.push("/files")
    })
  }

  const handleCancel = () => setState(false)

  const sendFile = async () => {
    setLoading(true)

    const dataForm = new FormData();
    let filaName = ''

    if (filesElement.current.files.length === 0) {
      setLoading(false)
      return setError(true)
    } else {
      setError(false)
    }

    for (const file of filesElement.current.files) {
      filaName = file.name
      dataForm.append('file', file);
    }

    cnabsApi.send(dataForm, filaName).then((response) => {
      setFileName(response)
      setServerError(true)
      setState(true)
    })
    .catch(() => setServerError(true))
    .finally(() => setLoading(false))
  };

  return (
    <Main title="Cadastro de usuários">
      <div className="header-content">
        <Breadcrumb size="big" icon="right angle" sections={sections} />
        <div>
          <Button
            size="large"
            onClick={() => history.push("/files")}
            color="red"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            onClick={() => sendFile()}
            color="green"
            size="large"
            loading={loading}
          >
            Enviar
          </Button>
        </div>
      </div>
      <div className="content" style={{ marginLeft: "2%" }}>
        {loading ? (
          <Placeholder fluid>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        ) : (
          <Form>
            <Grid>
            <div>
              <input type="file" multiple ref={filesElement} />      
            </div>
            </Grid>
            <br />
            
            {error ? <Message>
              <Message.Header>Oops...</Message.Header>
              <p>
                Você precisa selecionar um arquivo para o envio.
              </p>
            </Message> : null }

            {serverError ? <Message>
              <Message.Header>Oops...</Message.Header>
              <p>
                Desculpe tivemos um problema em nossos servidores, tente novamente em alguns minutos...
              </p>
            </Message> : null }
          </Form>
        )}
      </div>
      <Confirm
          open={state}
          content='Arquivo salvo com sucesso, deseja iniciar a leitura do arquivo ? '
          onCancel={handleCancel}
          onConfirm={handleConfirm}
          cancelButton='Cancelar'
          confirmButton="Sim"
        />
    </Main>
  );
}

export default Register;
