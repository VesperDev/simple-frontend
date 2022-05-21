import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Container,
  Text
} from '@chakra-ui/react'
import { clientesGet } from '@/services/Clientes';

export default function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    clientesGet().then(response => {
      setData(response)
    })
  }, [])


  return (
    <>
      <Head>
        <title>Frontend</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Text paddingBottom={8} paddingTop={8} marginLeft={4} fontSize='xl' >Clientes del mes</Text>
        <TableContainer>
          <Table variant='simple'>
            <TableCaption>Lista de nuevos clientes</TableCaption>
            <Thead>
              <Tr>
                <Th>Nombre</Th>
                <Th>Estado</Th>
                <Th>Teléfono</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                data.map((item, index) => {
                  return (
                    <Tr key={index.toString()}>
                      <Td>{item.nombre}</Td>
                      <Td>{item.estado}</Td>
                      <Td>{item.telefono}</Td>
                    </Tr>
                  )
                })
              }
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
}
