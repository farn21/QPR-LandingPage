<section>
    <div class="img-container-mobile justify-content-center my-3">
        <img class="img-mobile" src="/images/ComoParticipamos.png" alt="" />
    </div>
    <div class="container d-flex justify-content-between">
        <div class="content mb-5">
            <p class="titulo fw-bold">
                ¿Qué Pasa,<br />
                Riachuelo?
            </p>
            <p>
                ¿Qué pasa, Riachuelo? (QPR) es una herramienta de ciencia
                ciudadana social para promover acciones de Justicia Ambiental en
                la Cuenca Matanza-Riachuelo. A través del mapeo colaborativo
                permite organizar, sistematizar y compartir las visiones y el
                conocimiento acumulado a lo largo de los años por organizaciones
                sociales, científicos y otros actores que generan acciones hacia

                la justicia ambiental en la cuenca. 
                La participación ciudadana es central en el enfoque de justicia 
                ambiental; el objetivo es proteger los ecosistemas amenazados, 
                reducir los impactos sobre la población expuesta y limitar las 
                desigualdades asociadas a la contaminación.
                Si QPR te resulta interesante, te agradecemos que
                colabores con su difusión entre organizaciones sociales, redes,
                instituciones, etc.
            </p>
        </div>
        
        <div class="img-container">
            <img class="img-home" src="/images/asdasdasd.png" alt="" />
        </div>
        <a class="link h5 mb-4 text-decoration-none" href="https://mapaqpr.farn.org.ar/">Ingresa al mapa</a>
    </div>
    <div class="end-container my-5">
        <div class="text-end">
            <img class="flecha-mobile" src="/images/Union.png" alt="" />
        </div>
        <div class="text-center">
            <img class="linea" width="100%" src="/images/linea.png" alt="" />
        </div>
    </div>
</section>

<style>
    .end-container {
        display: none;
    }

    .img-home {
        position: absolute;
        right: 0px;
        width: 90%;
        align-self: flex-end;
    }

    .boton{
        background: #F0A300;
        border-radius: 24px;
        padding: 16px;
        width: 80%;
        color: white;
        font-family: "Montserrat";
        font-weight: 700;
        margin-top: 31px;
    }

    .img-container-mobile{
        display: none !important;
    }

    @media screen and (max-width: 900px){
        .img-container{display: none;}
        .content{ max-width: 100%;}
        .boton{width: 100%; padding: 20px;}
        .img-mobile{width: 50%;}
        .img-container-mobile{display:flex !important;}
        .end-container { display: flex;}
        .linea{width: 95%;}
    }
</style>
