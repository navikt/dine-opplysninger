import PanelBase from 'nav-frontend-paneler';
import './GrunnPanel.less';
import * as React from 'react';
import classNames from 'classnames';

function GrunnPanel(props: {children: React.ReactNode, className?: string, hidden?: boolean, feil?: boolean, border?: boolean}) {
    if (props.hidden) {
        return null;
    }

    const clas  = classNames(props.className, 'grunnpanel', {'grunnpanel--harFeil': props.feil});
    return (
        <PanelBase className={clas} border={props.border} >
            {props.children}
        </PanelBase>
    );
}
export default GrunnPanel;