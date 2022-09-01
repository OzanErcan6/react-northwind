import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { Button, FormField, Label } from 'semantic-ui-react'


export default function ProductAdd() {
    const initialValue = { productName: "", unitPrice: 10 }
    const schema = Yup.object({
        productName: Yup.string().required("ürün adı zorunlu"),
        unitPrice: Yup.number().required("ürün fiyatı zorunludur"),
    });
    return (
        <div>
            <Formik 
            initialValues={initialValue} 
            validationSchema={schema} 
            onSubmit={(values) => {
                console.log(values)
            }}>
                <Form className="ui form">
                    <FormField>
                        <Field name="productName" placeholder="ürün adı"></Field>
                        <ErrorMessage name="productName" render={error => <Label pointing basic color="red" content={error}></Label>}></ErrorMessage>
                    </FormField>
                    <FormField>
                        <Field name="unitPrice" placeholder="ürün fiyatı"></Field>
                        <ErrorMessage name="unitPrice" render={error => <Label pointing basic color="red" content={error}></Label>}></ErrorMessage>
                    </FormField>
                    <Button color="green" type="submit">Ekle </Button>
                </Form>
            </Formik>
        </div>
    )
}
