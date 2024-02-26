import React  ,{useState} from "react";
import { Grid, List, ListItemText, Typography, Button, Stack, Container } from "@mui/material";
import { Box } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import { useState } from "react";
// import TextField from '@material-ui/core/TextField';







  export default function Footer() {
    const [hovered, setHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
  return (
    <div>
      <hr/>

    <Box
      sx={{
        fontFamily: 'sans-serif',
        background:'white',
        color: "#000",
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '16px' },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      <Grid container spacing={2} justifyContent="center"sx={{fontStyle:'initial'}}>
       
        <Grid item md={6} lg={2}>
        <Typography variant="body1" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer', fontFamily: 'revert-layer',fontStyle: 'italic'}}}><u><b>ABOUT US</b></u></Typography> 
            <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Company Proﬁle
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Leadership Team
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Board Of Directors
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Locations
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Contact
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Careers
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Events
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Awards
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              RouteESG
              </Typography>
            </ListItemText>
          </List>

        </Grid>  <Grid item md={6} lg={2}>
        <Typography variant="body1" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer', fontFamily: 'revert-layer',fontStyle: 'italic'}}}><u><b>SOLUTIONS</b></u></Typography> 
            <List>
            <Typography variant="body1" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer', fontFamily: 'revert-layer',fontStyle: 'italic'}}}><u><b>AREAS</b></u></Typography> 
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              - Marketing & Sales
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
                - Customer care
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
                - Customer Engagement
              </Typography>
            </ListItemText>
            <Typography variant="body1" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer', fontFamily: 'revert-layer',fontStyle: 'italic'}}}><u><b>INDUSTRIES</b></u></Typography> 
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              - BFSI (Finance)
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
                - Customer Engagement
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              - Ecommerce
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              - Healthcare
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              - Telecommunications
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              - Hospitality
              </Typography>
            </ListItemText>
          </List>

        </Grid> <Grid item md={6} lg={2}>
        <Typography variant="body1" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer', fontFamily: 'revert-layer',fontStyle: 'italic'}}}><u><b>PRODUCTS</b></u></Typography> 
            <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Messaging
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Enhanced Business Messaging
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Identity & Verification
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Voice
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Email
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Bespoke Solutions
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Payments
              </Typography>
            </ListItemText>
          </List>

        </Grid>  <Grid item md={6} lg={2}>
        <Typography variant="body1" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer', fontFamily: 'revert-layer',fontStyle: 'italic'}}}><u><b>TELECOM</b></u></Typography> 
            <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Route Shield (Firewall)
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Route Hub
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              SMSC as a Solution
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Instant Virtual Numbers
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              R365 ECM
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              365 Detect
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              365 Analytics
              </Typography>
            </ListItemText>
          </List>
        </Grid>

        <Grid item md={6} lg={2}>
        <Typography variant="body1" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer', fontFamily: 'revert-layer',fontStyle: 'italic'}}}><u><b>INVESTORS</b></u></Typography> 
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Investor Information
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Compositions of Various Committees of Board of Directors
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Corporate Governance
              </Typography>
            </ListItemText>
            <Typography variant="body1" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer', fontFamily: 'revert-layer',fontStyle: 'italic'}}}><u><b>DEVELOPERS</b></u></Typography>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Developers Details
              </Typography>
            </ListItemText>
          </List>

        </Grid>
        <Grid item md={6} lg={2}>
        <Typography variant="body1" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer', fontFamily: 'revert-layer',fontStyle: 'italic'}}}><u><b>RESOURCES</b></u></Typography> 
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Press Releases
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color:'blueviolet', cursor: 'pointer'}}}>
              Media Coverage
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Media Kit
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Case Studies
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Use Cases
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Blogs
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Thought Leadership
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Webinars
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Whitepaper
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              Knowledge Center
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              API
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              TMobile Client
              </Typography>
            </ListItemText>
            <ListItemText>
            <Typography lineHeight={2} variant="caption2" sx={{'&:hover': { color: 'blueviolet', cursor: 'pointer'}}}>
              application
              </Typography>
              
            </ListItemText>
          </List>
       
        </Grid>
        <Grid item md={6} lg={4}>
         
          <Stack>
         
            <Grid container spacing={2} justifyContent="right"></Grid>
          
            <Grid container>
      <Box sx={{ mt: 4 }}>
        <FacebookIcon sx={{ mr: 2, fontSize: 50, }} />
        <TwitterIcon sx={{ mr: 2, fontSize: 50 }} />
        <InstagramIcon sx={{ mr: 2, fontSize: 50 }} />
        <LocalPhoneIcon sx={{ mr: 2, fontSize: 50 }} />
      </Box>
    </Grid>
          </Stack>
         
        </Grid>
        <Grid item md={4} lg={6}>
      <Typography variant="body1" sx={{ fontSize: 24 }}><b><u><i>Address</i></u></b></Typography>
      <Typography
              variant="body1"
              sx={{
                fontSize: 16,
                '&:hover': { color: 'blue', transform: 'translateY(5px)' },
                cursor: 'pointer'
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Cessna Business Park, Level 8, Tower 1, Umiya Business Bay, Embassy Tech Square Main Road, Outer Ring Rd, Marathahalli, Bengaluru, Karnataka 560103

              </Typography>
    </Grid>
      </Grid>
            
    </Box>
    </div>
  );
}