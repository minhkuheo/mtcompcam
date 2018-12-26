import React, { Component } from 'react';
import ProductCard from '../../components/ProductCard';

import testImage from '../../util/images/camera/capture.PNG';

class CameraTronBo extends Component {

    render() {
        return(
            <React.Fragment>
                <ProductCard image={testImage} title="camera HIKVISION" price="1.999.000 VND"/>
                <ProductCard image={testImage} title="camera HIKVISION" price="1.999.000 VND"/>
                <ProductCard image={testImage} title="camera HIKVISION" price="1.999.000 VND"/>
                <ProductCard image={testImage} title="camera HIKVISION" price="1.999.000 VND"/>
                <ProductCard image={testImage} title="camera HIKVISION" price="1.999.000 VND"/>
                <ProductCard image={testImage} title="camera HIKVISION" price="1.999.000 VND"/>
                <ProductCard image={testImage} title="camera HIKVISION" price="1.999.000 VND"/>
                <ProductCard image={testImage} title="camera HIKVISION" price="1.999.000 VND"/>
                <ProductCard image={testImage} title="camera HIKVISION" price="1.999.000 VND"/>
                <ProductCard image={testImage} title="camera HIKVISION" price="1.999.000 VND"/>
                <ProductCard image={testImage} title="camera HIKVISION" price="1.999.000 VND"/>
                <ProductCard image={testImage} title="camera HIKVISION" price="1.999.000 VND"/>
            </React.Fragment>
        );
    }
}

export default CameraTronBo;