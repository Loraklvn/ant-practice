import React, { useState } from 'react'
import 'antd/dist/antd.css';
import {
    Divider,
    Row,
    Col,
    Form,
    Input,
    Button,
    Radio,
    Select,
    DatePicker,
} from 'antd';
import 'moment/locale/es'
import locale from 'antd/es/date-picker/locale/es_ES'
import { ArrowRightOutlined, PlusOutlined } from '@ant-design/icons';
const { Item } = Form
const { Group } = Radio
const { Option } = Select

function BaseForm(){
    const [documentoIdentidad, setDocumentoIdentidad] = useState('')
    const [tipoDocumento, setTipoDocumento] = useState('')

    const formItemLayout = {
        labelCol:{
            xs: {
                span: 12
            },
            sm: {
                span: 12
            },
            md: {
                span: 7
            },
            wrapperol: {
                xs: {
                    span: 4
                },
                sm: {
                    span: 20
                }
            }
        }
    }

    const onFinish = values => {
        const { tipoDocumento, nacionalidad, fechaNacimiento, sexo, estadoCivil, categoria } = values
        if(
            !tipoDocumento || !nacionalidad || !fechaNacimiento || !sexo || !estadoCivil || !categoria
        ) {
            alert('Llenar todos los campos requeridos!')
        } else{
            console.log('Success:', values);
            
        }
    };

    const handleChangeDocument = documento => {
        const valor = documento.target.value
        setDocumentoIdentidad(documento)
        valor === 'cedula'? setTipoDocumento("number") : setTipoDocumento("text") 
    }

    return (
        <>
        <Divider orientation="left"><h3 className="title">Datos Generales</h3></Divider>
          <Form style={{paddingLeft: '14px'}} {...formItemLayout} onFinish={onFinish}>          
            <Row gutter={[16, 0]}>
                <Col span={12}>
                    <Item label="Código:">
                        <Input placeholder="Código persona" disabled/>
                    </Item>
                </Col>

                <Col span={12}></Col>

                <Col span={12}  >
                    <Item label="Tipo documento:" name="tipoDocumento">
                        <Group onChange={handleChangeDocument}>
                            <Radio value="cedula">Cédula</Radio>
                            <Radio value="pasaporte">Pasaporte</Radio>
                        </Group>
                    </Item>
                </Col>
                <Col span={12}  >
                    <Item label="Doc. Identidad:" name="documentoIdentidad">
                    <Input 
                        placeholder="Elige el tipo de documento (Cédula o pasaporte" 
                        disabled={documentoIdentidad ? false : true } 
                        type={tipoDocumento}
                        required
                    />
                    </Item>
                </Col>
                <Col span={12}>
                    <Item label="Nombre(s):" name="nombre(s)"> 
                        <Input placeholder="Nombre(s)" required/>
                    </Item>
                </Col>
                <Col span={12} >
                    <Item label="Apellido(s):" name="apellido(s)">
                        <Input placeholder="Apellido(s)" required/>
                    </Item>
                </Col>
                <Col span={12} >
                    <Item label="Apodo:" name="apodo">
                        <Input placeholder="Apodo(opcional)" />
                    </Item>
                </Col>
                <Col span={12} >
                        <Item label="Nacionalidad:" name="nacionalidad" >
                        <Select
                            showSearch
                            placeholder="Nacionalidad"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="ALEMANIA">ALEMANIA</Option>
                            <Option value="ARGENTINA">ARGENTINA</Option>
                            <Option value="AUSTRIACA">AUSTRIACA</Option>
                            <Option value="BELGA">BELGA</Option>
                            <Option value="BRASILEÑA">BRASILEÑA</Option>
                            <Option value="BULGARA">BULGARA</Option>
                            <Option value="CANADA">CANADA</Option>
                            <Option value="CHINA">CHINA</Option>
                            <Option value="CHILE">CHILE</Option>
                            <Option value="COLOMBIA">COLOMBIA</Option>
                            <Option value="CUBA">CUBA</Option>
                        </Select>
                        </Item>
                </Col>
                <Col span={12} >
                    <Item label="Lugar de nac:" name="lugarNacimiento">
                        <Input placeholder="Lugar de nacimiento" required/>
                    </Item>
                </Col>
                <Col span={12} >
                    <Item label="Fecha de nacimiento:" name="fechaNacimiento">
                        <DatePicker placeholder="Fecha de nacimiento" locale={locale} />
                    </Item>
                </Col>
                <Col span={12} >
                    <Item label="Sexo:" name="sexo">
                        <Group required>
                            <Radio value="Masculino">Masculino</Radio>
                            <Radio value="Femenino">Femenino</Radio>
                        </Group>
                    </Item>
                </Col>
                <Col span={12}  >
                    <Item label="Estado Civil:" name="estadoCivil">
                        <Group required>
                            <Radio value="Soltero">Soltero(a)</Radio>
                            <Radio value="Casado">Casado(a)</Radio>
                            <Radio value="UnionLibre">Unión libre</Radio>
                        </Group>
                    </Item>
                </Col>
                <Col span={12} >
                    <Item label="Categoría solicitada:" name="categoria">
                        <Select placeholder="Categoria solicitada" required>
                            <Option value="EMPRESERIAL">EMPRESERIAL</Option>
                            <Option value="MICROEMPRESARIAL">MICROEMPRESARIAL</Option>
                            <Option value="RELACIONADO">RELACIONADO</Option>
                            <Option value="AHORRANTE">AHORRANTE</Option>
                        </Select>
                    </Item>
                </Col>

                <Col span={12}></Col>

                <Col span={4} offset={20}>
                    <Button type="primary" htmlType="button" icon={<PlusOutlined style={{fontSize: 15}} />}>Agregar relacionado</Button>
                </Col>
                <Col span={4}>
                    <Button type="primary" htmlType="submit" icon={<ArrowRightOutlined />}>Siguiente</Button>
                </Col>
            </Row>
          </Form>
        </>
      );
}
export default BaseForm