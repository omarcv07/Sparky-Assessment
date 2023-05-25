import { MakeOrdersDb } from '@data-access/types/orders';
import { BASIC_AUTH } from '@infrastructure/config';
import axios from 'axios'

const makeOrdersDb = (): MakeOrdersDb => {
    async function getAll() {
        const username = BASIC_AUTH.USERNAME;
        const password = BASIC_AUTH.PASSWORD;

        const encodedCredentials = Buffer.from(`${username}:${password}`).toString(
            "base64"
        );
        const response = await axios.get(
            "https://assessments.sparkyapps.dev/assessment/data",
            {
                headers: {
                    Authorization: `Basic ${encodedCredentials}`,
                },
            }
        );

        return response.data.orders;
    }

    return Object.freeze({
        getAll
    });
};

export default makeOrdersDb;