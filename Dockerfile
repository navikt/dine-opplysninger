FROM navikt/pus-decorator

ENV APPLICATION_NAME=dine-opplysninger
ENV NAIS_APP_NAME=dine-opplysninger
ENV NAIS_NAMESPACE=q0
ENV APPRES_CMS_URL=https://appres-q0.nav.no

COPY /decorator.yaml /
COPY /build /app
