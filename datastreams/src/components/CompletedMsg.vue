<template>
    <div class="wrapper">
        <div class="component_completedmsg">
            <h4 class="component-title title-blob">
                Ontvanger & Bericht
            </h4>
            <div class="component completedmsg">
                <div class="completedmsg_contact">
                    <div class="completedmsg_contact_photo">
                        <img class="receiver" src="../assets/img/receiver1.png">
                    </div>

                    <div class="completedmsg_contact_info">
                        <b>Geert Janssen | Hypoleen</b><br><br>
                        Fontys Hogescholen<br><br>
                        Geertjanssen@info-hypoleen.nl
                    </div>
                </div>
                <hr class="separation">
                <div class="completedmsg_content">
                    <h2>Gegevens loonstroken en jaaropgaven </h2> <br><br>
                    Lorem ipsum dolor sit amet, <br><br> consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                    quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                    imperdiet a, venenatis vitae, justo. <br><br> Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                    Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                    porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                    feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
                    imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. <br><br>

                    Lirum Thijs


                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CompletedMsg',
        props: {}
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../scss/_toplevel.scss";

    .component_completedmsg {
        margin-top: 5rem;
        margin-left: 6rem;
        width: 800px;
    }

    .completedmsg_contact {
        display: flex;
    }

    .completedmsg_contact_info {
        margin-left: 30px;
        margin-top: 10px;
    }

    .receiver {
        width: 120px;
    }

    .separation {
        margin-top: 20px;
        border: 0;
        border-top: 1px solid grey;
    }

    .completedmsg_content {
        margin-top: 20px;
    }
</style>