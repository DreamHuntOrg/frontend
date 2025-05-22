import { Box, Button, Paper, Stack, Typography, Container } from "@mui/material";
import Navbar from "./components/Navbar";
import EmpCard from "./components/EmpCard";
import CompanyCard from "./components/CompanyCard";
import AIMatchingCard from "./components/AiMatchCard";
import TestimonialCards from "./components/TestimonialCards";
import Footer from "./components/Footer"


export default function Home() {
  // Temporary testimonials data
  const testimonials = [
    {
      rating: 5,
      review: "JobMatch completely transformed how we find technical talent. The quality of candidates and the efficiency of the matching process is exceptional.",
      name: "Sarah Johnson",
      title: "CTO at TechSolutions",
      type: "Recruiter",
    
      
    },
    {
      rating: 5,
      review: "I found my dream job within two weeks of creating my profile. The consent-based approach meant I only talked to companies I was genuinely interested in.",
      name: "Michael Chen",
      title: "Full Stack Developer",
      type: "Job Seeker",
    
      
    },
    {
      rating: 5,
      review: "I found my dream job within two weeks of creating my profile. The consent-based approach meant I only talked to companies I was genuinely interested in.",
      name: "Michael Chen",
      title: "Full Stack Developer",
      type: "Job Seeker",
    
      
    },
  ];

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: "center",
          background: "linear-gradient(120deg, #f8f6ff 60%, #e6eaff 100%)",
          position: 'relative',
          px: { xs: 2, md: 8 },
          pt: { xs: 8, md: 12 },
          pb: { xs: 4, md: 8 },
        }}
      >
        {/* Left Side */}
        <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
          <Typography variant="h2" sx={{ mb: 2, lineHeight: 1.1 }}>
            Where <Box component="span" color="primary.main">talent</Box><br />
            meets <Box component="span" color="primary.main">opportunity</Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: "500px" }}>
            Connect skilled people with innovative companies through our consent-based matching platform.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              sx={{ borderRadius: 2 }}
            >
              Create an account
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              size="large" 
              sx={{ borderRadius: 2, backgroundColor: "#fff" }}
            >
              Sign in
            </Button>
          </Stack>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
            Trusted by 2,000+ users and 500+ companies
          </Typography>
        </Box>

        {/* Right Side */}
        <Box sx={{
          flex: 1,
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          height: '500px',
        }}>
          <Box sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}>
            <Box sx={{
              position: 'absolute',
              top: '15%',
              left: '10%',
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: 'rgba(103, 58, 183, 0.05)',
              animation: 'float 8s ease-in-out infinite',
            }} />
            <Box sx={{
              position: 'absolute',
              bottom: '20%',
              right: '15%',
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'rgba(33, 150, 243, 0.05)',
              animation: 'float 6s ease-in-out infinite',
            }} />
            <Box sx={{
              position: 'absolute',
              top: '60%',
              left: '20%',
              width: 30,
              height: 30,
              borderRadius: '8px',
              background: 'rgba(233, 30, 99, 0.05)',
              transform: 'rotate(45deg)',
              animation: 'float 7s ease-in-out infinite',
            }} />
          </Box>

          {/* Card Container */}
          <Box sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            perspective: '1000px',
          }}>
            <EmpCard />
            <CompanyCard 
              name="TechCorp Inc."
              industry="AI & Machine Learning"
              location="San Francisco, CA"
              positions={["Frontend", "ML Engineer", "DevOps"]}
              review="We've hired 5 amazing developers through ANT in last 3 months!"
              avatarGrp={[
                "/static/images/avatar/1.png",
                "/static/images/avatar/2.png",
                "/static/images/avatar/3.png",
                "/static/images/avatar/4.png"
              ]}
              rating={5}
            />
            <AIMatchingCard />
          </Box>
        </Box>
      </Box>

      {/* Features Section */}
      <Box 
        id="features" 
        sx={{ 
          py: 10, 
          background: 'linear-gradient(180deg, #f8f6ff 0%, #ffffff 100%)',
        }}
      >
        <Container maxWidth="lg">

          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Why Choose <Box component="span" color="primary.main">ANT</Box>?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
              Discover the features that make our platform the smarter, faster, and more human way to connect talent with opportunity.
            </Typography>
          </Box>

          {/* Features Grid */}
          <Box display="flex" gap={3} flexWrap="wrap" justifyContent="center">
            {[
              {
                color: '#7c4dff',
                title: 'AI-Powered Matching',
                desc: 'Our proprietary ANT AI instantly connects recruiters with the most relevant, high-quality candidates, saving hours of manual searching.'
              },
              {
                color: '#2979ff',
                title: 'Handpick Top Talent',
                desc: 'Recruiters can easily browse and select from a curated pool of skilled professionals, ensuring only the best fit for every role.'
              },
              {
                color: '#651fff',
                title: 'Faster Hiring, Lower Costs',
                desc: 'Fill positions in record time and reduce hiring expenses with our efficient, targeted matching—no more long waiting periods or wasted resources.'
              },
              {
                color: '#00bfae',
                title: 'Empowered Job Seekers',
                desc: 'Job seekers get matched to roles that truly fit their skills and ambitions, with full control over who can contact them.'
              },
              {
                color: '#ff7043',
                title: 'Privacy & Consent First',
                desc: 'Communication only happens when both sides are interested, ensuring a respectful and spam-free experience for everyone.'
              },
              {
                color: '#ffd600',
                title: 'A Better Way to Find Work',
                desc: 'Experience a platform designed for real results—more opportunities, less noise, and a smarter path to your next career move.'
              }
            ].map((feature, idx) => (
              <Box key={idx} flex={{ xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' }} minWidth={260} maxWidth={340} mb={4}>
                <Paper elevation={0} sx={{
                  p: 4,
                  borderRadius: 4,
                  height: '100%',
                  boxShadow: '0 4px 24px rgba(103,58,183,0.04)',
                  position: 'relative',
                  textAlign: 'left',
                  border: '1px solid rgba(103,58,183,0.07)',
                }}>
                  <Box sx={{
                    position: 'absolute',
                    top: 24,
                    left: 24,
                    width: 40,
                    height: 40,
                    bgcolor: feature.color,
                    color: '#fff',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: 20,
                    boxShadow: '0 2px 8px rgba(103,58,183,0.10)',
                  }}>{`0${idx+1}`}</Box>
                  <Box sx={{ ml: 7 }}>
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 1, mt: 0.5 }}>{feature.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{feature.desc}</Typography>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* How JobMatch feature Works Section */}
      <Box id="working" sx={{ py: 10, background: 'linear-gradient(180deg, #f8f6ff 0%, #f3f2fa 100%)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              How ANT <Box component="span" color="primary.main" fontWeight={700}>works</Box>
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
              See how our platform makes connecting talent and opportunity seamless for both job seekers and recruiters.
            </Typography>
          </Box>
          <Box display="flex" flexWrap={{ xs: 'wrap', md: 'nowrap' }} gap={4} justifyContent="center">
            {/* Job Seekers Card */}
            <Box flex={1} minWidth={300}>
              <Paper elevation={0} sx={{
                p: 5,
                borderRadius: 4,
                height: '100%',
                boxShadow: '0 4px 24px rgba(103,58,183,0.04)',
                border: '1px solid rgba(103,58,183,0.07)',
                background: '#fff',
                transition: 'all 0.3s ease-in-out',
                transform: 'perspective(1000px) rotateX(0) rotateY(0)',
                '&:hover': {
                  transform: 'perspective(1000px) rotateX(2deg) rotateY(5deg)',
                  boxShadow: '0 20px 40px rgba(103,58,183,0.15)',
                  translateY: '-8px',
                },
                '@keyframes float': {
                  '0%': { transform: 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)' },
                  '50%': { transform: 'perspective(1000px) rotateX(2deg) rotateY(-2deg) translateZ(10px)' },
                  '100%': { transform: 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)' },
                },
                animation: 'float 6s ease-in-out infinite',
              }}>
                <Typography variant="h5" fontWeight={700} sx={{ mb: 1.5 }}>For Job Seekers</Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  Find your next opportunity in just a few simple steps.
                </Typography>
                <Stack spacing={3}>
                  {[
                    'Create your profile with your skills and experience.',
                    'Get matched instantly with roles that fit you.',
                    'Review and accept opportunities from top companies.',
                    'Communicate directly with recruiters—on your terms.'
                  ].map((item, idx) => (
                    <Box key={idx} display="flex" alignItems="center" gap={2}>
                      <Box sx={{
                        width: 32,
                        height: 32,
                        bgcolor: '#7c4dff',
                        color: '#fff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: 18,
                        boxShadow: '0 2px 8px rgba(103,58,183,0.10)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.1) rotate(5deg)',
                          boxShadow: '0 4px 12px rgba(103,58,183,0.20)',
                        }
                      }}>{`0${idx+1}`}</Box>
                      <Typography>{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Box>

            {/* Recruiters Card */}
            <Box flex={1} minWidth={300}>
              <Paper elevation={0} sx={{
                p: 5,
                borderRadius: 4,
                height: '100%',
                boxShadow: '0 4px 24px rgba(103,58,183,0.04)',
                border: '1px solid rgba(103,58,183,0.07)',
                background: '#fff',
                transition: 'all 0.3s ease-in-out',
                transform: 'perspective(1000px) rotateX(0) rotateY(0)',
                '&:hover': {
                  transform: 'perspective(1000px) rotateX(2deg) rotateY(-5deg)',
                  boxShadow: '0 20px 40px rgba(41,121,255,0.15)',
                  translateY: '-8px',
                },
                '@keyframes float2': {
                  '0%': { transform: 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)' },
                  '50%': { transform: 'perspective(1000px) rotateX(2deg) rotateY(2deg) translateZ(10px)' },
                  '100%': { transform: 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)' },
                },
                animation: 'float2 6s ease-in-out infinite',
                animationDelay: '0.5s',
              }}>
                <Typography variant="h5" fontWeight={700} sx={{ mb: 1.5 }}>For Recruiters</Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  Hire the best talent, faster and smarter.
                </Typography>
                <Stack spacing={3}>
                  {[
                    'Post your open positions and requirements.',
                    'Instantly see top-matched candidates via ANT AI.',
                    'Handpick and connect with skilled professionals.',
                    'Hire faster, with less effort and lower cost.'
                  ].map((item, idx) => (
                    <Box key={idx} display="flex" alignItems="center" gap={2}>
                      <Box sx={{
                        width: 32,
                        height: 32,
                        bgcolor: '#2979ff',
                        color: '#fff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: 18,
                        boxShadow: '0 2px 8px rgba(41,121,255,0.10)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.1) rotate(-5deg)',
                          boxShadow: '0 4px 12px rgba(41,121,255,0.20)',
                        }
                      }}>{`0${idx+1}`}</Box>
                      <Typography>{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box id="testimonials" sx={{ py: 10, background: 'linear-gradient(180deg, #f8f6ff 0%, #f3f2fa 100%)' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" fontWeight={700} sx={{ mb: 2 }}>
            Trusted by <Box component="span" color="primary.main">thousands</Box>
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Dont just take our word for it – hear what our users have to say about their experience.
          </Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center">
            {testimonials.map((test, i) => (
              <TestimonialCards key={i} {...test} />
            ))}
        </Box>
      </Container>
    </Box>

    {/* CTA Section */}
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(120deg, #f8f6ff 60%, #e6eaff 100%)",
        px: { xs: 2, md: 8 },
        py: { xs: 8, md: 12 },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 1100,
          borderRadius: 5,
          p: { xs: 3, md: 8 },
          background: "linear-gradient(120deg, #f8faff 60%, #ede7ff 100%)",
          boxShadow: "0 8px 32px rgba(103,58,183,0.08)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            mb: 2,
            lineHeight: 1.15,
            fontSize: { xs: "2rem", md: "2.8rem" },
          }}
        >
          Ready to transform your{" "}
          <Box component="span" sx={{ color: "#7c4dff" }}>
            hiring
          </Box>{" "}
          or{" "}
          <Box component="span" sx={{ color: "#7c4dff" }}>
            job search
          </Box>
          ?
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            mb: 4,
            maxWidth: 700,
            mx: "auto",
            fontWeight: 400,
          }}
        >
          Join thousands of job seekers and recruiters who have found success on our platform.
          <br />
          Create your account today and experience the difference.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ mb: 3 }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: 2,
              fontWeight: 700,
              minWidth: 200,
              fontSize: "1.1rem",
              boxShadow: "none",
              background: "#7c4dff",
              "&:hover": { background: "#651fff" },
            }}
          >
            Get started for free
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{
              borderRadius: 2,
              fontWeight: 500,
              minWidth: 200,
              fontSize: "1.1rem",
              background: "#fff",
              borderColor: "#ede7ff",
              "&:hover": { background: "#f3f0ff" },
            }}
          >
            Learn more
          </Button>
        </Stack>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 2, fontWeight: 400 }}
        >
          No credit card required. Free for individual users.
        </Typography>
      </Paper>
    </Box>

    <Footer />
    </Box>
  );
}