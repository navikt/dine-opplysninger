FROM navikt/pus-decorator

ENV APPLICATION_NAME=dine-opplysninger
ENV NAIS_APP_NAME=dine-opplysninger

COPY /decorator.yaml /
COPY /build /app
