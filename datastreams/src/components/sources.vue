<template>
    <Container title="Bronnen">
        <h1>Bronnen</h1>
        <div class="sources">
        <div class="sources__component">
            <div class="sources__categories">
                <table>
                    <tr>
                        <th class="sources__categories__category">Gekoppelde mails</th>
                        <th class="sources__categories__category">Koppeling naam</th>
                        <th class="sources__categories__category">Gekoppelde documenten</th>
                        <th class="sources__categories__category">Status</th>
                    </tr>
                    <SourcesData
                            v-for="source in sourcedata"
                            :key="source.capitals"
                            :email="source.email"
                            :naam="source.naam"
                            :documenten="source.documenten"
                            :status="source.status"
                    />
                </table>
            </div>
            <button class="sources__component__action sources__component__action--no-center btn-primary">
                Bron toevoegen
            </button>
        </div>
        </div>
    </Container>
</template>

<script>
    import SourcesData from '../components/SourcesData.vue';
    import Container from '../components/Container.vue';

    //import demodata
    import { sourcedata } from "../demodata/SourceData";

    export default {
        name: 'sources',
        components: {
            Container,
            SourcesData
        },
        props: {
            email: String,
            naam: String,
            documenten: String,
            status: String
        },
        data: () => ({
            sourcedata: sourcedata
        }),
    };
</script>

<style lang="scss">
    @import "../scss/_toplevel.scss";
</style>