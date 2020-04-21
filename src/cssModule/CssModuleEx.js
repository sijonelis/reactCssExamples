import React, {useState} from 'react';
import clsx from 'clsx';

import './../App.css';
import styles from './CssModuleEx.module.css';


export default function CssBaseEx() {
    const [color, useColor] = useState(false);

    function ToggleColor() {
        useColor(!color);
    }

    return (<div className="App">
        <h1 className={clsx(styles.Title, styles.Title2, color && styles.Title3)}>Hello World, styled with css-modules!</h1><div onClick={() => ToggleColor()}>Change color </div>
      </div>)
}