FROM navikt/pus-decorator

ENV APPLICATION_NAME=dine-opplysninger

COPY /decorator.yaml /app
COPY /build /app
