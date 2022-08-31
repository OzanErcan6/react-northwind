import React from 'react'
import {Menu, Image, Dropdown} from 'semantic-ui-react'

export default function SignedIn(props) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2020/08/14/440866-1854448434.jpg?itok=QD0-zZeA"></Image>
            <Dropdown pointing="top right" text='Ozan'>
                <Dropdown.Menu>
                  
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}

