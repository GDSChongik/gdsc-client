const RoutePath = {
  Index: '/',
  Home: '/',

  MyPage: '/mypage',
  Bevy: '/bevy',
  Discord: '/discord',

  AuthenticationProcess1_GithubSignin: '/auth',
  AuthenticationProcess2_StudentVerification: '/student-verification',
  AuthenticationProcess2_UpdatedStudentVerification:
    '/updated-student-verification',
  AuthenticationProcess3_Signup: '/signup',

  AuthServerRedirect: '/social-login/redirect',
  StudentVerificationServerRedirect: '/onboarding/verify-email',

  GitHubGuideLink: 'https://www.gdschongik.com/guide/github',
  StudentEmailLinkGuideLink: 'https://www.gdschongik.com/guide/student-email',

  CommunityGuideLink:
    'https://www.gdschongik.com/onboarding/community-guideline',
  TermsLink: 'https://www.gdschongik.com/onboarding/community-rule'
} as const;

export default RoutePath;
