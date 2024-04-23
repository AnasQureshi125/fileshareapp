import * as React from 'react';
import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components";
import EmailBanner from '../../public/emailBanner.jpg';
import EmailFooter from '../../public/yelp-footer.png';

export const EmailTemplate = ({
    firstName,
}) => (
    <Html lang="en" dir="ltr">
        <Head />
        <Preview>Yelp recent login {firstName}</Preview>
        <Body style={{
            backgroundColor: "#fff",
            fontFamily:
                '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
        }}>
            <Container>
                <Section style={{padding: "30px 20px",}}>
                    {/* <Img src={EmailLogo} alt="EmailLogo" /> */}
                </Section>

                <Section style={{
                    border: "1px solid rgb(0,0,0, 0.1)",
                    borderRadius: "3px",
                    overflow: "hidden",
                }}>
                    <Row>
                        <Img
                            style={{maxWidth: "100%",}}
                            width={620}
                            src={EmailBanner}
                            alt="EmailBanner"
                        />
                    </Row>

                    <Row style={{ padding: "20px", paddingBottom: "0" }}>
                        <Column>
                            <Heading
                                style={{
                                    fontSize: 32,
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            >
                                Hi {userFirstName},
                            </Heading>
                            <Heading
                                as="h2"
                                style={{
                                    fontSize: 26,
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            >
                                We noticed a recent login to your Yelp account.
                            </Heading>

                            <Text style={{fontSize: 16,}}>
                                <b>Time: </b>
                                {formattedDate}
                            </Text>
                            <Text style={{ fontSize: 16, marginTop: -5 }}>
                                <b>Device: </b>
                                {loginDevice}
                            </Text>
                            <Text style={{ fontSize: 16, marginTop: -5 }}>
                                <b>Location: </b>
                                {loginLocation}
                            </Text>
                            <Text
                                style={{
                                    color: "rgb(0,0,0, 0.5)",
                                    fontSize: 14,
                                    marginTop: -5,
                                }}
                            >
                                *Approximate geographic location based on IP address:
                                {loginIp}
                            </Text>

                            <Text style={{fontSize: 16,}}>
                                If this was you, there's nothing else you need to do.
                            </Text>
                            <Text style={{ fontSize: 16, marginTop: -5 }}>
                                If this wasn't you or if you have additional questions, please
                                see our support page.
                            </Text>
                        </Column>
                    </Row>
                    <Row style={{ padding: "20px", paddingTop: "0" }}>
                        <Column style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                        }} colSpan={2}>
                            <Button style={{
                                backgroundColor: "#e00707",
                                borderRadius: 3,
                                color: "#FFF",
                                fontWeight: "bold",
                                border: "1px solid rgb(0,0,0, 0.1)",
                                cursor: "pointer",
                                padding: "12px 30px",
                            }}>Learn More</Button>
                        </Column>
                    </Row>
                </Section>

                <Section style={{padding: "45px 0 0 0",}}>
                    <Img
                        style={{maxWidth: "100%",}}
                        width={620}
                        src={EmailFooter}
                        alt="EmailFooter"
                    />
                </Section>

                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 12,
                        color: "rgb(0,0,0, 0.7)",
                    }}
                >
                    © 2024 | AnasFileSharing @2024 Copyrights
                    U.S.A. | www.anasfilesharing.com
                </Text>
            </Container>
        </Body>
    </Html>
);