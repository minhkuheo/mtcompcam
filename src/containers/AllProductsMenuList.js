import React, { Component } from 'react';
import * as PATHS from '../util/contants/RouteContants';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowRight from '@material-ui/icons/ArrowRight';

import MenuIcon from '@material-ui/icons/Menu';
import LaptopIcon from '@material-ui/icons/Laptop';
// import CameraAlt from '@material-ui/icons/CameraAlt';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemLink from '../components/ListItemLink';

const MAIN_CATEGORIES = {
    LAPTOP: 'Laptop',
    CAMERA: 'Camera',
    THIETBIANNINH: 'Thiết bị an ninh',
    MAYCHAMCONG: 'Máy chấm công',
    TONGDAI_BODAM: 'Tổng đài Bộ đàm',
    THIETBIVANPHONG: 'Thiết bị văn phòng'
}

const arrowRightListIcon = (
    <React.Fragment>
        <ListItemIcon>
            <ArrowRight />
        </ListItemIcon>
    </React.Fragment>
);

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 3,
    },
});

class AllProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openLeft: false,
            openNestedList: false,
            [MAIN_CATEGORIES.LAPTOP]: false,
            [MAIN_CATEGORIES.CAMERA]: false,
            [MAIN_CATEGORIES.MAYCHAMCONG]: false,
            [MAIN_CATEGORIES.TONGDAI_BODAM]: false,
            [MAIN_CATEGORIES.THIETBIVANPHONG]: false,

        };
    }

    toggleDrawer = () => {
        this.setState(prevState => ({ openLeft: !prevState.openLeft }));
    }

    handleClickNestedList = (collapseName) => () => {
        this.setState(prevState => ({ [collapseName]: !prevState[collapseName] }));
    }

    renderMainCategory = (props) => {
        return (
            <React.Fragment>
                <ListItem button onClick={this.handleClickNestedList(props)}>
                    <ListItemIcon>
                        <LaptopIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={props} />
                    {this.state.openNestedList ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
            </React.Fragment>
        );
    }

    renderNestedListItemLink = (to, primary) => (
        <ListItemLink to={to} primary={primary} icon={arrowRightListIcon} className={this.props.classes.nested}/>
    );

    render() {
        return (
            <React.Fragment>
                <MenuIcon onClick={this.toggleDrawer} />
                <Drawer open={this.state.openLeft} onClose={this.toggleDrawer}>
                    <List component="nav">
                        {this.renderMainCategory(MAIN_CATEGORIES.LAPTOP)}
                        <Collapse in={this.state[MAIN_CATEGORIES.LAPTOP]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {this.renderNestedListItemLink(PATHS.GAMING_LAPTOP, 'Gaming laptop')}
                                {this.renderNestedListItemLink(PATHS.LAPTOP_VANPHONG, 'Laptop văn phòng')}
                            </List>
                        </Collapse>

                        {this.renderMainCategory(MAIN_CATEGORIES.CAMERA)}
                        <Collapse in={this.state[MAIN_CATEGORIES.CAMERA]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {this.renderNestedListItemLink(PATHS.CAMERA_TRONBO, 'Camera trọn bộ')}
                                {this.renderNestedListItemLink(PATHS.CAMERA_GIAMSAT, 'Camera giám sát')}
                                {this.renderNestedListItemLink(PATHS.CAMERA_DAUGHIHINH, 'Đầu ghi hình camera')}
                                {this.renderNestedListItemLink(PATHS.CAMERA_PHUKIEN, 'Phụ kiện camera')}
                            </List>
                        </Collapse>

                        {this.renderMainCategory(MAIN_CATEGORIES.THIETBIANNINH)}
                        <Collapse in={this.state[MAIN_CATEGORIES.THIETBIANNINH]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {this.renderNestedListItemLink(PATHS.ANNING_THIETBICHONGTROM, 'Thiết bị chống trộm')}
                                {this.renderNestedListItemLink(PATHS.ANNING_CHUONGCUA_MANHINH, 'Chuông cửa màn hình')}
                            </List>
                        </Collapse>

                        {this.renderMainCategory(MAIN_CATEGORIES.MAYCHAMCONG)}
                        <Collapse in={this.state[MAIN_CATEGORIES.MAYCHAMCONG]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {this.renderNestedListItemLink(PATHS.MAYCHAMCONG_UNGDUNGVANTAY, 'Ứng dụng vân tay')}
                            </List>
                        </Collapse>

                        {this.renderMainCategory(MAIN_CATEGORIES.TONGDAI_BODAM)}
                        <Collapse in={this.state[MAIN_CATEGORIES.TONGDAI_BODAM]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {this.renderNestedListItemLink(PATHS.TONGDAI_BODAM, 'Bộ đàm')}
                            </List>
                        </Collapse>

                        {this.renderMainCategory(MAIN_CATEGORIES.THIETBIVANPHONG)}
                        <Collapse in={this.state[MAIN_CATEGORIES.THIETBIVANPHONG]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {this.renderNestedListItemLink(PATHS.THIETBIVANPHONG_MAYCHIEU, 'Máy chiếu')}
                                {this.renderNestedListItemLink(PATHS.THIETBIVANPHONG_PHUKIENMAYCHIEU, 'Phụ kiện máy chiếu')}
                            </List>
                        </Collapse>
                    </List>

                </Drawer>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(AllProducts);