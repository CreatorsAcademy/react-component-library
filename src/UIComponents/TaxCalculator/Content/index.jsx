import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputData from "./Input";

function Content() {
    return (
        <Container>
            <Box
                sx={{
                    my: 2,
                    width: "100%",
                    height: 400,
                    backgroundColor: "neutrals.dark",
                }}
            >
                <Typography
                    sx={{ ml: 1, pl: 1, pt: 1 }}
                    variant="h4"
                    gutterBottom
                    component="div"
                >
                    Instructions
                </Typography>
                <div>
                    <Typography
                        sx={{ ml: 1, pl: 1 }}
                        variant="body1"
                        gutterBottom
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum euismod justo massa, eu commodo augue rutrum
                        id. Morbi suscipit elementum auctor. Sed cursus vitae
                        nibh at placerat. Suspendisse sed mauris placerat metus
                        venenatis pretium. Praesent ac augue at ante pretium
                        pretium eu a nisl. Morbi volutpat, nisi ut vestibulum
                        finibus, mi felis bibendum diam, vitae tincidunt ipsum
                        justo ut nulla. Donec placerat metus lectus, ut euismod
                        lacus faucibus et. Vivamus rhoncus sed mauris dapibus
                        interdum. Aenean rhoncus eros in egestas laoreet. Nullam
                        elementum diam vel nisi consequat tempus. Quisque
                        vulputate est vitae nunc viverra, ac lacinia leo
                        vulputate. Proin ut pulvinar dui. Nunc ac volutpat enim.
                        Praesent dapibus convallis efficitur. Curabitur magna
                        velit, dictum eget urna at, tincidunt bibendum sapien.
                        Curabitur feugiat metus vestibulum euismod vestibulum.
                        Etiam gravida rutrum maximus. Vivamus imperdiet, odio a
                        porta viverra, lorem dolor sollicitudin dui, eu cursus
                        ex ex eu diam. Aliquam semper pellentesque finibus.
                        Quisque malesuada gravida libero sollicitudin suscipit.
                        Maecenas sem felis, feugiat sed tellus id, aliquam
                        dictum ligula. Nulla at sem consectetur, interdum felis
                        sit amet, tristique arcu. Aenean eleifend, justo vel
                        convallis ultrices, purus odio ullamcorper massa, at
                        mattis lorem tortor id velit. Vivamus semper luctus
                        urna, ac ullamcorper tortor ultrices sit amet. Sed
                        placerat pharetra erat. Sed vulputate at nibh sit amet
                        lacinia. Ut orci ligula, scelerisque sit amet imperdiet
                        nec, consectetur eu lacus. Aliquam sit amet egestas leo.
                        Nunc placerat est egestas, ullamcorper ante sed,
                        ullamcorper ante. Duis sed rutrum turpis. Nulla
                        dignissim tristique risus sed malesuada.
                    </Typography>
                </div>
            </Box>
            <Box
                sx={{
                    my: 2,
                    width: "100%",
                    height: 800,
                    backgroundColor: "neutrals.dark",
                }}
            >
                <Typography
                    sx={{ ml: 1, pl: 1, pt: 1 }}
                    variant="h4"
                    gutterBottom
                    component="div"
                >
                    Fill details
                </Typography>
                <InputData />
            </Box>
        </Container>
    );
}

export default Content;
