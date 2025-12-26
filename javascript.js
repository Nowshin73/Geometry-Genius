  function triangle() {
            let tri_b = document.getElementById("triangle_b").value;
            let tri_h = document.getElementById("triangle_h").value;
            if ((tri_b != null) && (tri_h != null)) {
                return output('Triangle', 0.5, tri_b, tri_h);
            }
            else {
                return "please enter positive numbers";
            }

        }

        function ractangle() {
            let ract_w = document.getElementById("ractangle_w").value;
            let ract_l = document.getElementById("ractangle_l").value;
            if (ract_w == 0 && ract_l == 0) {
                return "please enter the values";
            }
            else if (ract_w < 0 && ract_l < 0) {
                return "please enter positive numbers";
            }
            else {
                return output('Rectangle', 1, ract_w, ract_l);

            }
        }
        function parallelogram() {
            let paral_b = document.getElementById("parallelogram_b").value;
            let paral_h = document.getElementById("parallelogram_h").value;
            if (paral_b == null && paral_h == null) {
                return "please enter the values";
            }
            else if (paral_b < 0 && paral_h < 0) {
                return "please enter positive numbers";
            }
            else {
                return output('Parallelogram', 1, paral_b, paral_h);
            }
        }
        function rhombus() {
            let rhom_d1 = document.getElementById("rhombus_d1").value;
            let rhom_d2 = document.getElementById("rhombus_d2").value;
            if (rhom_d1 == null && rhom_d2 == null) {
                return "please enter the values";
            }
            else if (rhom_d1 < 0 && rhom_d2 < 0) {
                return "please enter positive numbers";
            }
            else {
                return output('Rhombus', 0.5, rhom_d1, rhom_d2);
            }
        }
        function pentagon() {
            let pen_p = document.getElementById("pentagon_p").value;
            let pen_b = document.getElementById("pentagon_b").value;
            if (pen_p == null && pen_b == null) {
                return "please enter the values";
            }
            else if (pen_p < 0 && pen_b < 0) {
                return "please enter positive numbers";
            }
            else {
                return output('Pentagon', 0.5, pen_p, pen_b);
            }
        }
        function ellipse() {
            let ell_a = document.getElementById("ellipse_a").value;
            let ell_b = document.getElementById("ellipse_b").value;
            if (ell_a == null && ell_b == null) {
                return "please enter the values";
            }
            else if (ell_a < 0 && ell_b < 0) {
                return "please enter positive numbers";
            }
            else {
                return output('Ellipse', 3.14, ell_a, ell_b);
            }
        }

        function output(name, param1, param2, param3) {
            let result = param1 * param2 * param3;
            const node1 = document.createElement("li");
            node2 = document.createElement('span');
            node3 = document.createElement('sup');
            node4 = document.createElement('button');
            node1.classList.add("space-x-4");

            node1.innerHTML = "<span> " + name + "</span> <span>" + result + "</span><span>cm<sup>2</sup></span><button  class='py-2 px-4 text-white font-bold bg-[#1090D8] rounded-lg'>Convert to m<sup>2</sup></button></li>"

            document.getElementById(
                "area").appendChild(node1);
        }