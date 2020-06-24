<template>
    <div class="wrapper">
        <div class="component_privacy">
            <h4 class="component-title title-blob">
                Privacy Instellingen
            </h4>
            <div class="component privacy">
                <form>
                    <div class="info">
                        Vervaldatum
                        <input class="fname" type="text" name="name" placeholder="30/09/2020 ">
                        Toestemming voor downloads
                        <select name="Downloaden toestaan">
                            <option>Downloaden toestaan</option>
                            <option>Downloaden niet toestaan</option>
                        </select>

                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Privacy',
        props: {}
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../scss/_toplevel.scss";

    form {
        width: 250px;
    }

    .fname {
        font-family: $font-primary;
    }

    .left-part {
        text-align: center;
    }

    .fa-graduation-cap {
        font-size: 72px;
    }

    .info {
        display: flex;
        flex-direction: column;
        font-family: $font-primary;
    }

    input,
    select {
        padding: 5px;
        margin-top: 10px;
        margin-bottom: 30px;
        background: transparent;
        border: none;
        color: grey;
        border-bottom: 1px solid grey;
    }
    input::placeholder {
        color: grey;
    }

    option:focus {
        border: none;
    }

    .checkbox input {
        margin: 0 10px 0 0;
        vertical-align: middle;
    }

    .checkbox a {
        color: #26a9e0;
    }

    .checkbox a:hover {
        color: #85d6de;
    }

    .component_privacy {
        margin-top: 3rem;
        margin-left: 6rem;
    }
</style>