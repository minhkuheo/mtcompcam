import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class ListItemLink extends React.Component {
    renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

    render() {
        const { icon, primary, secondary } = this.props;
        return (
            <React.Fragment>
                <ListItem button component={this.renderLink} {...this.props}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText inset primary={primary} secondary={secondary} />
                </ListItem>
            </React.Fragment>
        );
    }
}

export default ListItemLink;