
function webgl_support () {
   // See https://stackoverflow.com/questions/11871077/proper-way-to-detect-webgl-support
    try {
        var canvas = document.createElement('canvas'); 
        return !!window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch(e) {
        return false;
    }
}

const change_me = document.getElementById("change_me");

function get_random_between(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function load_gradient(gradient_data) {
    let gradient_table = JSON.parse(gradient_data);
    
    change_me.addEventListener('click', () => {
        paint_gradient(gradient_table);
    });

    paint_gradient(gradient_table);
}

function paint_gradient(gradient_table) {
    let rando = get_random_between(0, Object.keys(gradient_table).length - 1);

    // `use_again` limits bad gradients from being shown
    while (!gradient_table[rando].use_again) {
        rando = get_random_between(0, 377);
    }

	const gradient_el = document.getElementById("gradient");
	
	const gradient_entry = gradient_table[rando];
	const name = gradient_entry['name'];
	const grad = gradient_entry['gradient'];
    
    // Gross but works ¯\_(ツ)_/¯
    let linear_gradient;
    if(grad.length === 8) {
        linear_gradient = `linear-gradient(${grad[1]}, ${grad[2]} ${grad[3]}, ${grad[4]} ${grad[5]}, ${grad[6]} ${grad[7]})`
    } else {
        linear_gradient = `linear-gradient(${grad[1]}, ${grad[2]} ${grad[3]}, ${grad[4]} ${grad[5]})`
    }
    
    let background_gradient = `background-color: ${grad[0]};
                                background-image: ${linear_gradient};`
	gradient_el.setAttribute("style", background_gradient);
    change_me.setAttribute("title", "This theme's called " + name + "!");
}

function load_for_non_web_gl() {
    // Taken directly from the three.js docs
    var manager = new THREE.LoadingManager();
    let loader = new THREE.FileLoader(manager);
    
    //load a text file and output the result to the console
    loader.load(
        "../assets/gradients_min.json",
        
        // Load and paint gradients from `assets/gradients.json`
        load_gradient,
        
        // onProgress callback
        // function ( xhr ) {
        //     console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
        // },

        // Nop for progress callback for now
        () => {},
        // onError callback
        function (err) {
            console.error(`There was an error loading the background gradient's\n${err}`);
        }
    );    
}

(function() {
    if(webgl_support()) {
        console.log("This browser supports WebGL")
        load_for_non_web_gl()
    } else {
        load_for_non_web_gl()
    }
})();
