"use client"
import React from 'react'
import { Card, Text } from '@mantine/core'
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { useRef } from 'react';
import { Button, Group } from '@mantine/core';
import { IconPhoto, IconUpload } from '@tabler/icons-react';
import "../NavbarSimpleColored.module.css"

function AddProductForm() {
    const openRef = useRef<() => void>(null);
    return (
        <div className='container-fluid'>
            <form className='py-4'>
                <div className="row mt-4 justify-content-between">
                    <div className="col-lg-7">
                        <Card shadow="sm" padding="lg" radius="md" withBorder >
                            <h4 className='ms-2'>Informations basic </h4>
                            <Card.Section className='p-4'>
                                <div className="col-lg-12 mb-4">
                                    <label htmlFor="produit" className="form-label">Nom du produit</label>
                                    <input type="text" className="form-control p-2" id="produit" placeholder="Entrer le nom du produit" />
                                </div>
                                <div className="col-lg-12 mb-4">
                                    <label htmlFor="code" className="form-label">Code du produit</label>
                                    <input type="text" className="form-control p-2" id="code" placeholder="Entrer code du produit" />
                                </div>
                                <div className="col-lg-12 ">
                                    <label htmlFor="description" className="form-label">Ajouter une description du produit</label>
                                    <textarea className="form-control" id="description" rows={3}></textarea>
                                </div>
                            </Card.Section>
                        </Card>
                    </div>
                    <div className="col-lg-5">
                        <Card shadow="sm" padding="lg" radius="md" withBorder className="card h-100 d-flex justify-content-center align-items-center p-3" >
                            <Card.Section className="card-body d-flex justify-content-center align-items-center flex-column">
                                <Dropzone openRef={openRef} onDrop={() => { }}
                                    radius="md"
                                    accept={[MIME_TYPES.pdf]}
                                    maxSize={30 * 1024 ** 2}
                                    className="dropzone-dashed" >

                                    <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>

                                        <div>
                                            <IconPhoto size={50} />
                                            <Text size="sm" c="dimmed" className='mb-2' inline mt={7}>
                                                Glissez-déposez des images ici ou cliquez pour sélectionner des fichiers.
                                            </Text>
                                            <Button variant="light" leftSection={<IconUpload size={14} />} onClick={() => openRef.current?.()}>Sélectionner un fichier</Button>
                                        </div>

                                    </Group>
                                </Dropzone>
                                <Text size="sm" c="dimmed" className='mb-3' inline mt={7}>
                                    Ajoutez autant de fichiers que vous le souhaitez, chaque fichier ne doit pas dépasser 5 Mo.
                                </Text>
                            </Card.Section>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    
                </div>
            </form >
        </div >
    )
}

export default AddProductForm