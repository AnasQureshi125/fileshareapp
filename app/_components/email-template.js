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

export const EmailTemplate = ({
    response,
}) => (
    <Html lang="en">
        <Head />
        <Preview>Yelp recent login {response}</Preview>
        <Body style={{
            backgroundColor: "#fff",
            fontFamily:
                '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
        }}>
            <Container>

                <Section style={{ padding: "30px 20px", }}>
                    <Img src={`https://react-email-demo-bdj5iju9r-resend.vercel.app/static/yelp-logo.png`} alt='EmailLogo' />
                </Section>

                <Section style={{
                    border: "1px solid rgb(0,0,0, 0.1)",
                    borderRadius: "3px",
                    overflow: "hidden",
                }}>
                    <Row>
                        <Img
                            style={{ maxWidth: "100%", }}
                            width={620}
                            src={`https://c4.wallpaperflare.com/wallpaper/1020/154/412/torrentday-typography-red-humor-wallpaper-preview.jpg`}
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
                                Hi {response?.emailToSend?.split("@")[0]} ,
                            </Heading>
                            <Heading
                                as='h2'
                                style={{
                                    fontSize: 26,
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            >
                                Someone Share file with you
                            </Heading>

                            <Text style={{fontSize: 16,}}>
                                <b>File Name: {response?.fileName}</b>
                                
                            </Text>
                            <Text style={{ fontSize: 16, marginTop: -5 }}>
                                <b>File Size: {response?.fileSize}</b>
                                
                            </Text>
                            <Text style={{ fontSize: 16, marginTop: -5 }}>
                                <b>File Type: {response?.fileType}</b>
                                
                            </Text>
                            <Text
                                style={{
                                    color: "rgb(0,0,0, 0.5)",
                                    fontSize: 14,
                                    marginTop: -5,
                                }}
                            >
                                *Access and Download file on your own risk
                                
                            </Text>

                            <Text style={{fontSize: 16,}}>
                                Now you can also share file with Anasqureshi Fileshare.com
                            </Text>
                            <Text style={{ fontSize: 16, marginTop: -5 }}>
                                Click Below Button to Access your file
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
                            }}
                            href={response?.shortUrl}
                            >Click here to Download</Button>
                        </Column>
                    </Row>
                </Section>

                <Section style={{padding: "45px 0 0 0",}}>
                    <Img
                        style={{maxWidth: "100%",}}
                        width={620}
                        src={`https://react-email-demo-bdj5iju9r-resend.vercel.app/static/yelp-footer.png`}
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