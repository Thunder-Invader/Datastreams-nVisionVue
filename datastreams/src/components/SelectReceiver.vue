<template>
    <div class="wrapper">
        <div class="component_selectreceiver">
            <h4 class="component-title title-blob">
                Kies ontvanger
            </h4>
            <div class="component selectontvanger">
                <img class="ontvanger_foto" src="../assets/img/receiver1.png">
                <div class="selectontvanger_title">
                    Geert Janssen | Hypoleen
                </div>
                <div class="selectontvanger_body">
                    Fontys Hogescholen <br><br>
                    geert-janssen@info-hypoleen.nl
                </div>
            </div>
            <div class="component selectontvanger">
                <img class="ontvanger_foto" src="../assets/img/receiver2.png">
                <div class="selectontvanger_title">
                    Bert Janssen | Hypoleen
                </div>
                <div class="selectontvanger_body">
                    hypotheekaanvragen<br><br>
                    bert-janssen@info-hypoleen.nl
                </div>
            </div>
            <div class="component selectontvanger">
                <img class="ontvanger_foto" src="../assets/img/receiver3.png">
                <div class="selectontvanger_title">
                    Afid Janssen | Hypoleen
                </div>
                <div class="selectontvanger_body">
                    Occidental Potroleum<br><br>
                    afid-janssen@info-hypoleen.nl
                </div>
            </div>
            <div class="component selectontvanger">
                <img class="ontvanger_foto" src="../assets/img/receiver4.png">
                <div class="selectontvanger_title">
                    Johan Janssen | Hypoleen
                </div>
                <div class="selectontvanger_body">
                    Huis-hypotheek<br><br>
                    johan-janssen@info-hypoleen.nl
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SelectReceiver',
        props: {}
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../scss/_toplevel.scss";

    .component_selectreceiver {
        display: inline-block;
    }

    .component_selectreceiver {
        margin-top: 5rem;
        margin-left: 6rem;
    }

    .ontvanger_foto {
        width: 100px;
        z-index: -1;
    }

    .selectontvanger {
        display: inline-block;
        width: 300px;
        border-radius: 10px;

        padding: 20px;
    }

    .selectontvanger_title {
        font-weight: bold;
        margin-top: 15px;
    }

    .selectontvanger_body {
        margin-top: 15px;
    }

    .selectontvanger:hover{
        background: rgba(80, 189, 232, 0.2);
    }
    .selectontvanger:focus {
        background: rgba(80, 189, 232, 0.2);
    }
</style>