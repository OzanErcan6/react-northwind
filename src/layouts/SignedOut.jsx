import React from 'react'
import { Button } from 'semantic-ui-react'
import {Menu} from 'semantic-ui-react'


export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={props.signIn} primary>Giriş Yap</Button>
                <Button primary style={{marginLeft:"0.5em"}}>Kayıt ol</Button>
            </Menu.Item>
        </div>
    )
}
