import React from 'react';
import { Button, TextInput, View,Text } from 'react-native';
import { Formik } from 'formik';

const FormScreen = () => {
    return (
        <Formik
            initialValues={{ email: '' , password:''}}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                    <Button onPress={handleSubmit} title="Submit" />
                    <Text>{values.email}</Text>
                    <Text>{values.password}</Text>
                </View>
            )}
        </Formik>
    );
};

export default FormScreen;