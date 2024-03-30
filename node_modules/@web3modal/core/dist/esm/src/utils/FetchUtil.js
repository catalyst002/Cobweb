export class FetchUtil {
    constructor({ baseUrl }) {
        this.baseUrl = baseUrl;
    }
    async get({ headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await fetch(url, { method: 'GET', headers, signal, cache: 'no-cache' });
        return response.json();
    }
    async getBlob({ headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await fetch(url, { method: 'GET', headers, signal });
        return response.blob();
    }
    async post({ body, headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal
        });
        return response.json();
    }
    async put({ body, headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await fetch(url, {
            method: 'PUT',
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal
        });
        return response.json();
    }
    async delete({ body, headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await fetch(url, {
            method: 'DELETE',
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal
        });
        return response.json();
    }
    createUrl({ path, params }) {
        const url = new URL(path, this.baseUrl);
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value) {
                    url.searchParams.append(key, value);
                }
            });
        }
        return url;
    }
}
//# sourceMappingURL=FetchUtil.js.map