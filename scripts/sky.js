class Sky {
    constructor() {
        this.group = new THREE.Group();

        Utils.loadShader('Sky').then(obj => {
            let geom = new THREE.IcosahedronGeometry(100, 4);
            this.mat = this.getShader(obj.vs, obj.fs);
            let mesh = new THREE.Mesh(geom, this.mat);
            this.group.add(mesh);
        });

        // Bind `generateNewColor` to `Sky` class instead of clicked element
        document.getElementById("change_me")
            .addEventListener("click", this.generateNewColor.bind(this));
    }

    getShader(vs, fs) {
        let uniforms = {
            time: {type: 'f', value: 0},
            sat: {type: 'f', value: 0},
            color: {type: 'c', value: new THREE.Color(0x49BEAA)}
            // color: {type: 'c', value: new THREE.Color(0x7F3DBC)}
        };

        // https://threejs.org/docs/#api/en/materials/ShaderMaterial.uniforms
        let shader = new THREE.ShaderMaterial({
            vertexShader: vs,
            fragmentShader: fs,
            uniforms
        });

        shader.side = THREE.BackSide;

        return shader;
    }

    generateNewColor() {
        console.log("This can't be happening...");
        this.r = Utils.get_random_between(0, 256);
        this.g = Utils.get_random_between(0, 256);
        this.b = Utils.get_random_between(0, 256);
        
        // Update three material color
        this.color = `rgb(${this.r}, ${this.g}, ${this.b})`;
        this.mat.uniforms.color.value = new THREE.Color(this.color);
    }

    update() {
        if (this.mat) {
            this.mat.uniforms.time.value = performance.now() * 0.000010;
            // let oldColor = this.mat.uniforms.color.value;
            // Use this to convert to RGB and then enumerate the colors https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
            // Also looks useful https://htmlcolorcodes.com/
            // this.mat.uniforms.color.value = new THREE.Color()
        }
    }
}
