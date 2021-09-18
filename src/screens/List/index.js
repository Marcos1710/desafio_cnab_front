import React, { useEffect, useState } from "react";
import "./styles.css";

import {
  Table,
  Breadcrumb,
  Placeholder,
  Pagination
} from "semantic-ui-react";

import Main from "../../components/Main";

import { cnabsApi } from '../../services/cnabs'
import { fomrat } from '../../utils/formatList'

function List() {
  const [cnabs, setCnabs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCnabs()
  }, []);

  const sections = [
    { key: "cnabs", content: "cnabs" },
    { key: "listar", content: "listar" },
  ];

  const getCnabs = async () => {
    setLoading(true)

    const cnabs = await cnabsApi.reads()
    const rows = await fomrat(cnabs)

    setCnabs(rows)
    setLoading(false)
  }

  return (
    <Main title="Lista de arquivos">
      <div className="header-content">
        <Breadcrumb size="big" icon="right angle" sections={sections} />
      </div>
      <div className="content" style={{ marginLeft: "2%" }} data-testid="table-cnabs">
        {loading ? (
          <Placeholder fluid>
            <Placeholder.Header>
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
          <>
            <Table singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>CPF</Table.HeaderCell>
                  <Table.HeaderCell>Loja</Table.HeaderCell>
                  <Table.HeaderCell>Total</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {cnabs.map((cnab) => {
                  return (
                    <Table.Row key={cnab.id}>
                      <Table.Cell>{cnab.cpf}</Table.Cell>
                      <Table.Cell>{cnab.store}</Table.Cell>
                      <Table.Cell>{cnab.total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </>
        )}
      </div>
    </Main>
  );
}

export default List;
