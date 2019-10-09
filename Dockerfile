FROM node:12-alpine as builder

WORKDIR /app

COPY . .
RUN npm install && npm run build

FROM navikt/pus-decorator

ENV APPLICATION_NAME=dine-opplysninger

COPY --from=builder /app/build /app
COPY --from=builder /app/decorator.yaml /app