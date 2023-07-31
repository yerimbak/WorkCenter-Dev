import {createBrowserRouter} from 'react-router-dom'
// 페이지 레이아웃
import DefaultLayout from '@/layouts/DefaultLayout'
import PageLayout from '@/layouts/PageLayout'
import MyPageLayout from '@/layouts/MyPageLayout'
import NoMatch from '@/pages/NoMatch'
// 일반페이지
import Home from '@/pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      // 일반페이지
      {
        element: <PageLayout />,
        children: [
          // 홈
          {
            index: true,
            element: <Home />
          },
          // 이용가이드
          {
            path: 'guide',
            async lazy() {
              return {Component: (await import('@/pages/Guide')).default}
            }
          },
          // 서비스플랜
          {
            path: 'service-plan',
            async lazy() {
              return {Component: (await import('@/pages/ServicePlan')).default}
            }
          },
          // 공지사항
          {
            path: 'notice',
            async lazy() {
              return {Component: (await import('@/pages/Notice')).default}
            }
          },
          // 제휴문의
          {
            path: 'inquiry',
            async lazy() {
              return {Component: (await import('@/pages/Inquiry')).default}
            }
          },
          // 로그인
          {
            path: 'auth/login',
            async lazy() {
              return {Component: (await import('@/pages/auth/Login')).default}
            }
          },
          // 로그아웃
          {
            path: 'auth/logout',
            async lazy() {
              return {Component: (await import('@/pages/auth/Logout')).default}
            }
          },
          // 통합서비스안내
          {
            path: 'auth/service-info',
            async lazy() {
              return {Component: (await import('@/pages/auth/LoginServiceInfo')).default}
            }
          }
        ]
      },
      // 마이페이지
      {
        path: 'mypage',
        element: <MyPageLayout />,
        children: [
          // 내정보
          {
            index: true,
            async lazy() {
              return {Component: (await import('@/pages/mypage/MyInfo')).default}
            }
          },
          // MY문의
          {
            path: 'inquiry',
            async lazy() {
              return {Component: (await import('@/pages/mypage/MyInquiry')).default}
            }
          },
          // 요금제관리
          {
            path: 'plan',
            async lazy() {
              return {Component: (await import('@/pages/mypage/RatePlan')).default}
            }
          },
          // 결제내역
          {
            path: 'payment',
            async lazy() {
              return {Component: (await import('@/pages/mypage/PaymentDetail')).default}
            }
          },
          // 크레딧내역
          {
            path: 'credit',
            async lazy() {
              return {Component: (await import('@/pages/mypage/Credit')).default}
            }
          },
          // 서비스 사용내역
          {
            path: 'service-usage',
            async lazy() {
              return {Component: (await import('@/pages/mypage/ServiceUsage')).default}
            }
          }
        ]
      },
      // 이후로는 퍼블 가이드 링크
      {
        path: 'part-terms-Popup',
        async lazy() {
          let {PartTermsPopup} = await import('@/pages/partnership/PartTermsPopup')
          return {Component: PartTermsPopup}
        }
      },
      {
        path: 'payment-detail-popup1',
        async lazy() {
          let {PaymentDetailPopup1} = await import('@/pages/mypage/PaymentDetailPopup1')
          return {Component: PaymentDetailPopup1}
        }
      },
      {
        path: 'payment-detail-popup2',
        async lazy() {
          let {PaymentDetailPopup2} = await import('@/pages/mypage/PaymentDetailPopup2')
          return {Component: PaymentDetailPopup2}
        }
      },
      {
        path: 'payment-detail-popup3',
        async lazy() {
          let {PaymentDetailPopup3} = await import('@/pages/mypage/PaymentDetailPopup3')
          return {Component: PaymentDetailPopup3}
        }
      },
      {
        path: 'rate-plan-popup1',
        async lazy() {
          let {RatePlanPopup1} = await import('@/pages/mypage/RatePlanPopup1')
          return {Component: RatePlanPopup1}
        }
      },
      {
        path: 'rate-plan-popup2',
        async lazy() {
          let {RatePlanPopup2} = await import('@/pages/mypage/RatePlanPopup2')
          return {Component: RatePlanPopup2}
        }
      },
      {
        path: 'rate-mana-popup1',
        async lazy() {
          let {RatePlanManaPopup1} = await import('@/pages/mypage/RatePlanManaPopup1')
          return {Component: RatePlanManaPopup1}
        }
      },
      {
        path: 'rate-mana-popup2',
        async lazy() {
          let {RatePlanManaPopup2} = await import('@/pages/mypage/RatePlanManaPopup2')
          return {Component: RatePlanManaPopup2}
        }
      },
      {
        path: 'rate-mana-popup3',
        async lazy() {
          let {RatePlanManaPopup3} = await import('@/pages/mypage/RatePlanManaPopup3')
          return {Component: RatePlanManaPopup3}
        }
      },
      {
        path: 'my-change-password-popup1',
        async lazy() {
          let {MyChangePasswordPopup1} = await import('@/pages/mypage/MyChangePasswordPopup1')
          return {Component: MyChangePasswordPopup1}
        }
      },
      {
        path: 'my-change-password-popup2',
        async lazy() {
          let {MyChangePasswordPopup2} = await import('@/pages/mypage/MyChangePasswordPopup2')
          return {Component: MyChangePasswordPopup2}
        }
      },
      {
        path: 'my-withdrawal-popup1',
        async lazy() {
          let {MyWithdrawalPopup1} = await import('@/pages/mypage/MyWithdrawalPopup1')
          return {Component: MyWithdrawalPopup1}
        }
      },
      {
        path: 'my-withdrawal-popup2',
        async lazy() {
          let {MyWithdrawalPopup2} = await import('@/pages/mypage/MyWithdrawalPopup2')
          return {Component: MyWithdrawalPopup2}
        }
      },
      {
        path: 'my-withdrawal-popup3',
        async lazy() {
          let {MyWithdrawalPopup3} = await import('@/pages/mypage/MyWithdrawalPopup3')
          return {Component: MyWithdrawalPopup3}
        }
      },
      {
        path: 'social-not-popup',
        async lazy() {
          let {SocialNotPopup} = await import('@/pages/mypage/SocialNotPopup')
          return {Component: SocialNotPopup}
        }
      },
      {
        path: 'change-password-comp-popup',
        async lazy() {
          let {ChangePasswordCompPopup} = await import('@/pages/auth/ChangePasswordCompPopup')
          return {Component: ChangePasswordCompPopup}
        }
      },
      {
        path: 'notuser-info-popup',
        async lazy() {
          let {NotUserInfoPopup} = await import('@/pages/auth/NotUserInfoPopup')
          return {Component: NotUserInfoPopup}
        }
      },
      {
        path: 'social-comp-popup',
        async lazy() {
          let {SocialCompPopup} = await import('@/pages/auth/SocialCompPopup')
          return {Component: SocialCompPopup}
        }
      },
      {
        path: 'dormant-comp-popup',
        async lazy() {
          let {DormantCompPopup} = await import('@/pages/auth/DormantCompPopup')
          return {Component: DormantCompPopup}
        }
      },
      {
        path: 'popup-close-popup',
        async lazy() {
          let {PopupClosePopup} = await import('@/pages/sample/PopupClosePopup')
          return {Component: PopupClosePopup}
        }
      },
      {
        path: 'corporate-popup1',
        async lazy() {
          let {CorporatePopup1} = await import('@/pages/auth/CorporatePopup1')
          return {Component: CorporatePopup1}
        }
      },
      {
        path: 'corporate-popup2',
        async lazy() {
          let {CorporatePopup2} = await import('@/pages/auth/CorporatePopup2')
          return {Component: CorporatePopup2}
        }
      },
      {
        path: 'corporate-popup3',
        async lazy() {
          let {CorporatePopup3} = await import('@/pages/auth/CorporatePopup3')
          return {Component: CorporatePopup3}
        }
      },
      {
        path: 'corporate-popup4',
        async lazy() {
          let {CorporatePopup4} = await import('@/pages/auth/CorporatePopup4')
          return {Component: CorporatePopup4}
        }
      },
      {
        path: 'corporate-popup5',
        async lazy() {
          let {CorporatePopup5} = await import('@/pages/auth/CorporatePopup5')
          return {Component: CorporatePopup5}
        }
      },
      {
        path: 'login-popup',
        async lazy() {
          let {LoginPopup} = await import('@/pages/auth/LoginPopup')
          return {Component: LoginPopup}
        }
      },
      {
        path: 'contents-layout-guide',
        async lazy() {
          let {ContentsLayoutGuide} = await import('@/pages/ContentsLayoutGuide')
          return {Component: ContentsLayoutGuide}
        }
      },
      {
        path: 'form-guide',
        async lazy() {
          let {FormGuide} = await import('@/pages/FormGuide')
          return {Component: FormGuide}
        }
      }
    ]
  },
  {
    path: '*',
    element: <NoMatch />
  }
])

export default router
