<template>
    <tr>
        <td>{{ email }}</td>
        <td>{{ naam }}</td>
        <td>{{ documenten }}</td>
        <td>
            <img v-if="status=='1'"
                 src="../assets/svg/circle_true.svg"
                 alt="true"
                 class="sources__icon">
            <img v-if="status=='0'"
                 src="../assets/svg/circle_false.svg"
                 alt="false"
                 class="sources__icon">
        </td>
    </tr>
</template>

<script>
    export default {
        name: "SourcesData",
        props: {
            email: String,
            naam: String,
            documenten: String,
            status: String
        }
    };
</script>

<style lang="scss" scoped>
    @import "../scss/_toplevel.scss";
</style>