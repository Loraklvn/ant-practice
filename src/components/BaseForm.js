import React, {  } from 'react'
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
    // const refBtn = React.createRef()

    const formItemLayout = {
        labelCol:{
            xs: {
                span: 12
            },
            sm: {
                span: 12
            },
            md: {
                span: 8
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

    return (
        <>
        <Divider orientation="left"><h3 className="title">Datos Generales</h3></Divider>
          <Form {...formItemLayout}>          
            <Row gutter={[0, 0]}>
                <Col span={12}>
                    <Item label="Código:">
                        <Input placeholder="Código persona" disabled/>
                    </Item>
                </Col>

                <Col span={12}></Col>

                <Col span={12}  >
                    <Item label="Tipo documento:">
                        <Group>
                            <Radio value="Cédula">Cédula</Radio>
                            <Radio value="Pasaporte">Pasaporte</Radio>
                        </Group>
                    </Item>
                </Col>

                <Col span={12}  >
                    <Item label="Doc. Identidad:">
                    <Input placeholder="Elige el tipo de documento (Cédula o pasaporte" disabled/>
                    </Item>
                </Col>

                <Col span={12}>
                    <Item label="Nombre(s):">
                        <Input placeholder="Nombre(s)" />
                    </Item>
                </Col>

                <Col span={12} >
                    <Item label="Apellido(s):">
                        <Input placeholder="Apellido(s)" />
                    </Item>
                </Col>

                <Col span={12} >
                    <Item label="Apodo:">
                        <Input placeholder="Apodo(opcional)" />
                    </Item>
                </Col>

                <Col span={12} >
                        <Item label="Nacionalidad:">
                        <Select
                            showSearch
                            placeholder="Nacionalidad"
                            optionFilterProp="children"
                            // onChange={onChange}
                            // onFocus={onFocus}
                            // onBlur={onBlur}
                            // onSearch={onSearch}
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
                            <Option value="BRASILEÑA">CHILE</Option>
                            <Option value="BRASILEÑA">COLOMBIA</Option>
                            <Option value="BRASILEÑA">CUBA</Option>
                        </Select>
                        </Item>
                </Col>

                <Col span={12} >
                    <Item label="Lugar de nac:">
                        <Input placeholder="Lugar de nacimiento" />
                    </Item>
                </Col>

                <Col span={12} >
                    <Item label="Fecha de nacimiento:">
                        <DatePicker placeholder="Fecha de nacimiento" locale={locale} />
                    </Item>
                </Col>

                <Col span={12} >
                    <Item label="Sexo:">
                        <Group>
                            <Radio value="Masculino">Masculino</Radio>
                            <Radio value="Femenino">Femenino</Radio>
                        </Group>
                    </Item>
                </Col>

                <Col span={12}  >
                    <Item label="Estado Civil:">
                        <Group>
                            <Radio value="Soltero">Soltero(a)</Radio>
                            <Radio value="Casado">Casado(a)</Radio>
                            <Radio value="UnionLibre">Unión libre</Radio>
                        </Group>
                    </Item>
                </Col>

                <Col span={12} >
                    <Item label="Categoría solicitada:">
                        <Select placeholder="Categoria solicitada">
                            <Option value="EMPRESERIAL">EMPRESERIAL</Option>
                            <Option value="MICROEMPRESARIAL">MICROEMPRESARIAL</Option>
                            <Option value="RELACIONADO">RELACIONADO</Option>
                            <Option value="AHORRANTE">AHORRANTE</Option>
                        </Select>
                    </Item>
                </Col>

                <Col span={12}></Col>

                <Col span={4}>
                    <Button type="primary" htmlType="button" icon={<ArrowRightOutlined />}>Siguiente</Button>
                </Col>
                <Col span={4} offset={16}>
                    <Button type="primary" htmlType="button" icon={<PlusOutlined />}>Agregar relacionado</Button>
                </Col>
            </Row>
          </Form>
        </>
      );
}
export default BaseForm