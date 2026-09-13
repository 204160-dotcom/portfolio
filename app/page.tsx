const profileImage = "data:image/webp;base64,UklGRjoaAABXRUJQVlA4IC4aAAAQ5QCdASpoARwCPt1mrVKopTwzo3CbE4AbiWluctywjC+m7rR0ayTO/pmNkWo+KgPjBn90ef/2BuHb8meXq48bjg7CjfvHbXuVQLuEODQjoUG8fpTdoR1JRPr5BGbAuk9sTKhYbqQguHMwF7UzUJNqv6MVZjiMQPOk0CT4iAV5954gFxCFl6/5hqDqYA5+JRpYSi4QhzelDp5q5rjJHTiAfpEGhwAt7kNKFV5J+qmf+Gmz9pK8BlXgY/GG4U7D6I2YOxSwiXTFliPWAkmDsG9v59tpiXP7WqKkAo1uHCz8JX0wZh8esHfOa9aGODO8KhpMf7Bm81rrGNxY812WT7SvIY1mC6VqIG6tQe8MTFAvoWcDxYfOJFX4vA43XQC94qlNlItt9kkHc+d5doSxAPv+ceLG+LmoJexdnqfqoW1rwdUfd3FXj8y83+Dwi2GrerEIX9QyiWwkpL5MnNiE8kwoRRcRp5ZKEj6o/7lvdJVdcLMFbdK3FSNAn5KRgLSCoR81PQUTw3NjkbdxYJJ9FSXMUTofbeCmfAKSR1afs7XR2wDovxElBfQUzBtYiDFSaFz6RSs9exfnV7T4UnzepvyoF6ZejqPPYS583Pj8V4PBWgZ9MYBUeim43r/GRZuM/gW3K9YraHJzUp/InUX8fyKCobw8EIjOEIewUHWyjBfc38G49LaB++MZbh+d+ZAy9dK1zpr24voKPiW3ojUnDmRylWtMXMbmkbE/cxd9eJ5GU112E5ERn5uqvmRQH8zUxvTwt18ntIva1nutjD0SzTdswpTBZ+wGK5f6Pvoxg49eDaSscCQ5Do9yxQedAqIpYznNCr5FVfA00csBFUK1YRab1ctMSV3vRwAqw+C3L57d306cIHOa6tx1HF1RPpPHJihFEuq1XIjUo7/FSGJqpajHydeGwtvmcSWpF+UkVDAkTsl+Em1BM3IPH/evneReJiwg1mPCzeNYK8N/YmaK1zVOFQaVAXpPZWBGU950FJ7wxm9WMYnNmeHyA2CcKOijbgKpEmBgbl0Z60p+fy0EJCFwgx1UyGvhuoeKntSaArGMgq1UNbm7cXyFjN6+T6Lv/KPN9YGotS9JWJjDHLa7B2OdPgALEEAJxuySRfRgkAcqA0Nsd+I8ZNwwpeVoL15wFbG9cCutnOVlIgMLJea88w2ocheDYY5MKBQ30wv7MyxOsrj78U/oOSiNWMhkch9zf1SsNAtsm2Bxxzle7pLoOMVYPoXugPZw2//sYD1dMTYO2IrLk7ao8DcvYDwWZEx8ujyRRHvJ0v3oJWOg6CEgbSOHXptDfG/GdEzzjfLKSIK1pga+mbiP12JR0qB6m/8EGuonfoY97GN14wGEWriV3mNPLq7gP1BTMf5nIEYp7Da8R6sNTXpV/qNQYSqTO5ekDG4B/+t13qTLujMTrS0/EM7q2k2vcB9LTT6jnPMxckI00A1KzI/0b2mfwLeiFaVn1hR5CmrJiC/8vMaYudI9BFwBcPOANxe1ATjM+mMioL4N1Zbltf/dt5Cz0AqbnW0uZQHgnjQOpzViGZd2fCoqBhyjQuDaSQ/sOuidrtGZMLkimd9S6kIWTypSUQqxmjIeE1egr/c7IVZr7tuDIcLsg2PwYEIPqvgNt28R+mHqBXDWkPVtpbztX4uhE5AqqjhTOFnCQBf9HKq8HU8Tep1m+SirzkRgHCnkSCjPYBYxxmzpa8/FeJRh2xjubVIafnnqu4SVGUWlxvZpmNeDtagbuHnfdErwAIGvviAq6Ul3u/HDu5w0TdEo49rXZsODYYryk7BJRLkXeG++b2ZwYGEvs0h9mgrvxkLhCDNyBePJBqtuPGMIWM5nfRCEeT+uBRvKVxIWD5E5G5V6fMzXdGB2jHOKStkC0i+AWd35iGsjIb+J0V1knXd3QWKrcfQ+GZYqQflso0tkjXXwRM0IIZdnXH5IaAxEgNlmk/uBfPsRKez/07j9gEuLrG76pnt8DRR+7r/k2UL3JO24D0wXC3cUICxyJfg+wNeoOwEsT1me7ra6M8cZ1KXGgvqb6r8cq7EAEDWcACITrFd7fEzQ5yWv1qb1KalPcfY7XBd1mOiV3j3VyEC6G+LoufbCel1OSa/n0t3RFV8eghX+QWn71PhFNyujHO4I+KdLSSLgf2905DirjwEfMj8UECzWTmqjZBJrm1ZUsZ/pou73LIi9DSzgD1rqNSAtLPhFPGPoQswF6+vg0kjTfOd6PPU9E2QdrlYlf0Lp3xQZg1pjVMok2Mddq44CL/iJ7wJP7/3KB916X0y4yOTpRhAc3a8mWQnpRz3YBZqErhRQ7YziniIZsoUxd9fp7om2pZbCOB2iid2pvWMqhNPfFTwyntLG0D9uvYZSa1eKK1JkAbGjpb7TO8sHQiDMbApGSNb4GOqsI38VZEFlLg+MxNYOZARam2g/2oIkO4ajfY5LkIt1XEfqeyCG/48WtAD9opjEZGP3/pFbvrv378qb/yhs+GBYcPOVnq91b5XSg0/A7PmNy5OidgMShjBCORAlHbQqyUqXixKFfKou8RnTW6rwyruModqgn7nSCqVnlLo0fOv00u75bZJrHzEGRWyZFUekIu/pSPFX50U06B1eAlOwseUsFWiY2SNWsqfcdFz3Os9uz8w9p4tWUE5JDMjeEH/9UiIzKtyVWFDVUsAIzHOpl7UVk/FS3Fz5Z/wvBxt0vJQb3kysATkV3qzb2Peyyomrc2jHAAxjqAyOyH8stFg1QaMeU1JgYN4yoAnRqdIpbv/xDEL69yKdvxhXBxmywxr7IK4pyzGx9wDK+7QumVe2gpzfKjokZYCRNoLsC8xZgoDdkCvdfeNWK+wstv/tQdo96Hwhjsz7/hThU/uEGY5YQ/uvV+4Z48s78Cj3xhlXC8RSgGsaEXAlw6si23xFSHHPkp0owYLax4RbaU00OlnHJvtFz9KvsooA8rUF2OIbirctjef1QjT5OjPV6akBpWBdigoepdB2McxPsQwZK13fquRFTYmSd9peHkT2sg7+RhDF2Wr5Up14nbB3O6WCHVgPZpzKvf8CRBUFx7wE0ohSX4mVJljUcHfxx7JqcVWy/IFhg+Y81Ak14tj8SxTrlB7Zef84LdpDA5+B1VYe5jEwMAKIzM3NYVB6QRdpvtpTnz41eBid42zi9seSNgz92hdZn5etyMXW0kknBxlmzS9cG6h6V3gThfzz9AWZsqk+o6LktkQSucr6dyaTh89unZvMXmFe6EZczpAG909hxqTXOR2B00XF/3zpUEjqe4FeOuA+/RCnpwzitOhKnoWnxyzKRpuYCtC6Tp7jeGjxHftlCf3IXVZK2Z/zxERzZxLh1aBsPMmMcgegHCLfpkcTtj+R1mCWC4pMf2nK6kylV26FtOfmKCZx6pCmn5Q1/BTQf4NxuxpUrNQrlMpc0q6lz1fA++toIxDkO655uei60lA5XPHD177UlvPh9V65PW+qgDbl4ioi6FsvMsXuY5tgs/bLgU1axlhuO4QrLEeFH18oH7y02spE0kb7FU/+D/Agmog0LpVspOxJOrFO2upXgYB9LnhNM7yjlyhe7MYlYw/cFyyzWRsVhRiyr6nEL4D8uXAicYmbkDGY85bnHW6GkMhoEUoIrMdCIqF4eyr0AqciNxVmoJ4sOiuF3NV3E2eSwXMjdgJbeEIkQu9eBHfyVmmaFQxKOhDy8UoCNW+9GjsPz53jNXrbwDdJvuQu0XyWb/34TzOIDI2dz+zBe1hYYBFBvyWWcZiVw5dxtcFrTk7Q+bIxr/XrXc7cnkuhZA42f2CyVXITvUZhxhtUNX6ks8NxeeXmf3v01oAVfPTmKOIj+3MCC+8MGgIzpYqxe2fGYiA/cFAgfxeOPae8O0pbtAB8jIMHK2ycgSMYiKlQIl6jyq3ZgmmcjPZDzsjcgQ/RYuTzWzMYMkdD9AAKYmsNkPHokCfMIqo1adzOAWY0BKkZ6qzLCnnLxX9khLBDB3GXx1259OpE+tfq/0WG9aLIH5AndJZZDHoNWYGY9brYC8YESqM+PvYmNcc4lhTMME66Le7wCFQFHbPOUganhBYThYa4yxhyliUmsAk7awJ3u1+jGMZ+IJjFyRaNeuNLx+ddFzZdtnFzxoRpogB43erCk86ZE4yBz2RaUwca61LycvKt1ohdCgTxCr0V74BM07Wv6Sk/CnUGCienmmtoEE/tCXmbOSj5/3CXoMLZaSkqA9vcojLAUdJefBmszFTCDblVRUGyAiA+JZJzlTxmvAhc7dU5A0FUGC5jZoDhSIdzt4rvlaDCpBGA9mYRZx+Y5pJKFFGfvDghBmHz8hY/33h9deXZ21EztmF0WjNYgZ/ZNLFTfqqclV7LILhRfJr5G4KVqb2/858VHuaHUCZiXu8GhYJg7NDSPLhMF5nCuivdWOF7u4yLxrvf9k8o8yoHSzuSY3ihdEpyRBu4qpRDboeejhYUkHZC9Z4MCNtVSLoZEytD6+3BKxZjXgT/xwBT0QktkRHc7lYQc/5v5zzT0sMDbbzegMGzrKzPQctL0cUkO/FHzH88x04Nqb7GjZtsdD/6NSGdeExp0eLmhhXNZcBEhEbBVKSV8NoAafgsaHpdAuF2rCRLHRPodQFoz3KhV/MVxPK167MFrDMa7w04k9YaG/lt69QRXj/EPHbwKga+WM+dBf5Jm3YxL9F6zLEeZ1u7GNd5uG0bAHnWdEprC3SyhQZULyj+7+Iy4K+GYhVDt5F4oNGzMhrZt3r7syO3zbVEopOo35spUmm2DaQ4U2Q4QFxMf0MlS8ZAsbKE22OZPpaoQPa5NgIhvNgR4BbfUriWvq1p37y34UUVkJpp2y+G807gw7i/fxcTq7yZfF9q7tr7yVYzesOd8WV2euRpDEaoZFOh9FLny5bP+JG3Xf1yeN4Ok/xcvN0gXm1jPeU3i+laBCkUS4PhQVQ5PjgVkCgY1bM8E93BU7ba+gRy6j3jKrVUCI3TI2sdX/IiU1v54lwwhe9ES6/IK+2+1DzFsIU4wl1RfgKrRF+EYfaLRs+SO7/52s6Z6iDuaq0MsFB0VC9LcXv/APVja0Mc9Q/8M0/grsk72E8rq76s2u6s49OBar6+o6MQA0qYRPQlJ4jVQlehUXLMTc8MJOU7tpJrqqac/g2kv8CgHHc6PyWbKnU3BQmiE+7jO+Y5sfK8bO1C2SDMscCaz5YlgeJWFTQ3qtVFKgfg0zkqPvH9AC7TQhNk8DTnLs0Fsdp8ebPC7N5q71j1BAR/wJ95r2/Fb+Eq6S2EFjYW+ILrO8X5JNNbWWzXAONT8hBsmnjlMuIsRXLzfuxzuz4mKy7xTiP6uCJNzPOtX2iKTvJ7ue0NAhbZUxlHk/sEYxmTfoguYhArT+00wwq+I64Sw+vmQxrQ1dOvCoMabLAebPcrQE+Zuf4CjNtlI5H3PrTOoaqle8qeA9HzhBBDC0mzgD2RqZpYzhUwpHI4Vbwxmu9GKlvqfUTcnCfjKtucxvcO0KYZQwqiKetcFPDz03iORpXjX0cB4wMOFen+2Gj1dPJMStPUFTVvFYhV7wncVq+GnfE27tu+a8ju3buM6FA1Ol0r8dZTCX3dtKRVGusHqMcCHO4pKLlMHmy7JNPwkgySjNbr3z2Lg4y5/1r3i8L5rfwQKHcQZ9cbKGqnWZ9tyl3zIv+9W0f9JFM3hqfUDzZOcLvRAleFQQu1FFHucJQWbvBW20bhKzWMGtf2SEEDN8VHkoTQjdLESCv46amaql63POhWG1oEv6PyJEOl7k8G8rRV/oHpsrg5MDUwq22Qj1W+GUrS0NZFW8c8Dt+7TnD64bxTorx/gMWkiLVB5ojP40iHKz+Nhydx41o1UK2kPz6TGLmuS6Nv0UwDKGFv7Q69B/uYhLOBURjV9oqCwSzsr78eGS/e8UspG1lJ67oGqAYuJnBSdmBorr735LqBXn2cDpjjbpd3Mo29Q4sRw+96vFshJzfXDALvnCUhRH7cR7j54ktm4E3Ifhw93yIqDcCo+Kj+v9WW4qHChZBNc1pcDNMXoJ2NM9niMFTVJvC/mg7ANZqhOwy2L//TsojrEv7bhiw+AwyDa7vwfIXlLH4Ko7UJy6yTQillDNXSkizKjvX1DityiebqsqD/OaMOJTeXotHF3unQpGtM4a83kKEnd3jB1mkVv1BVoxo8VkJKFuYOoYnR6jyxEhHa8ROCFmxEEcg461TD3CKmvTxe/JAWsXzg9RjkZOPpPBHlJocGMPhSo9wJwdlnts3GUkJDzqwmOIe7RMWBtIUyJTzZM7pIhHLJ/4YQOwsFl3MXBPy4VXpAD+imCU1wThF4uqH7rxHpza6We5YWOaDkcrWXjNNLkjHvXwAUVvjD0JTiWxVzjER0P9DHm6XZnM9OVNdJ5yu2qAhxTjg/04X1wbd6OCtY4Ko4yTy1H3trJ8xO0sAnbkeq/OJrwaoAV5gyWlolQZhpUm2YfYB9hP24EhH6xe+9xdfjDUWCmbdOVwSCu2nybrnKBIrXzaEegc5IqULZFyZKQvYDsOfNJbtgHC8U+L4FFIcmkRzNjnkwT39hakuCYS9oCkBpYMQVLrn7bF3D+WtIgV9cdbmnyK2nQjzvh+KptQc6mJgV9yLZ1y36tiFgOKGogXLpIXGn1pCRWPVxqbTg8m8N8abpvEDi4qSJ3DI8W3U9aX/syL+rmbi520PnVczMlIugJlh5hz6D45bk0jsltgDVYy6LCCK8UHNXJoI6b0HZ+vu3IrsU38Gy5F2R8OIgBzZ3to+j5TRfFeXZZMibpidIC8g+APPO7Bl1jLb3ZDxeMH607tnLBEZFJNTRYvfF10ULFJ61KeUN0Z1OsKyKC2qYwNwtaZGOzGrUuhzKFZSvDCmgLxnhlpmJ4YXCa9wxKfzMBlgfEbFWPxP8+b7BXhcJkIC5XFFlGJ3EfQ3tQp7MFqwgT1zp0o+ZBxiWWUQ2ekkpDx6BKWSG0Ws+KKOzUp7KraTIFu4uKN8Xb/SQXxrFmCsT/ONvLU+bl90f8t+HkU42LanDQhYq8gjz63FQR4BDrGTVZ23vLt9fhO0B9rndp0GV9vBJOW9LoY8SnfdHY6ETiRLcPOQWvAYRimmU+L4FLgGiz5+KWILYB+mpLQrIcL3k4PG1I/1jOD4qNwrjzBUF4ig/YZvlnNTMea7zGYU5V+2wu8QDOhamqxbV4lPY4OhprenrnoCG1CPDYH9wj6ihPT7IMZeRF6OCKMFt53Xb/xCrljEdCOCc4e/0d8cvpcr5D212GhpWzRVm/PAWLsNdc6kj7Jbv74LZ7ZdD6VDlgR3W//WAML6m9Hkz1ooqIkUYI0CqLXvvKNUToDZXrofdnAuIdGukrBTDhMIfvrlbiSvTKZe6c72FHdD+xnEA2fXvA/zdviEzIxOAc8rJviMJyHxSS12nEwgvqP63qFK2DZVYAe+VCpIv4n3qWVUVRZnTUrqXthqf2n8yMXXAKtr+ZtT8DCohzZetMCD1u5A2aU9uXRBAxs3GcXikkr9fI29MPCK8ztJARg0jKx7HqHofHUqC1cM844Qmfdys982/6x0sTuPegN2ABFE0tJce5CLHbt8gxQN7tGVXz3TBgWJt3MPHrpj1FgSK/gMXl1IzN8w0ibi3cz0zXC37oGA8vKFwWoPCNQUun/3gcrSjyNiz8BbqA0a2vRDPLbtRaTrZcStx/SoBYNhCF+vb6HItjX4HXObUbhVQ0PMisDaygBmBxr2xo/XwaG/82yyobx0OsfklsQkMr5d/ifgNrRtl8TCN8sFiyIb5hxnFi3dWfu0Tk1pmxydc94dwJBAZ04GVogySQmMHT9umdR0wA9yiSrF8GNS2iOxHipHgJZy1GPXZvpKSa1ygSS3QOMfTfYAWvYoB5ioaCzx6U3kN1JbvVxvyj2coWk8pN4WMx0vNxE5vnzggu67ccIdFCIAOmvlZnYWpRgvPt41x9RwuuWkkM1MAPxI2NXTciYDQoOqRQrx13gzbICuHHBrsB8TfoVqP6bWUeb9RpEIiqbe30CNGDiiMfNefnt8OYn5JlAwPbvcWKhdBdBz3ho/Jqs016ulhRB5BMoieYa4QmdjLJVR389c/KqGNCdSb9zrpI6t/0m+z3e4wzF8mJd37d9NXOM3yxnJUuyeoAAD8hzCYJjM3WyeKynj8SvKO+HSt1wELCZniJSM4p8Irj91sRWRA1T4h+BFcd7arU55qc3+gd70vfVvkI7TC8QbuOqu26rEDootYpWG8mugWKIStMTY3OtD2iq8eOomrnZ7XTqtjpvFqALqGvQTCbNst4z47Ezbm9n9JuNGyJELWpAACmuWh8o/RlaBvC1tVzZeZSHhMvEnCV/y5WY3nCLdzXtN6h964hjnU0rOyiFegF599hcc1juQxR6z8y7FDIjc8zzhfMUG7r8hmWM1VE60P4XhUsmfOs74gcQMP228YvCwFygj+iUQt+z4yNb8a172Oalgeut0sc4TiIla9AiwVh7QZrezSvc1X3D4xZtq6LQRIA7ULN6cCAZqK3SpEPdIo/56dxPAJWLKu6Yb2KJSyFYB54apr4EbD9/NE/aDgHGnS+pJIAufGzcjO3DmNDGOQU4XerxoaTgRmEHTIsH2zCOcUBHOLHA4X2Sgt/ySF8JWrgZoJAwOwykbnqge7V8K8AlG0ZlD25kQOQraVO/6fA4Lf0+4OiLVJVviQYxDnouwYzIgy1jINkVPtn3Jx5y12piKSM5WHQG2BN1bKC4XdAdQEtqaS7xQA9MRQ6SLAGxZapsJvv5dVjGi0vglb2BmLcDoxYtqXXAqmY0gDpq+vdgylsJdEgnqJtDizOracLHBoDZ1JffdtR7I89AM3KQj+CmdEpl+9h3YXMxrOvPPEaxZzgrqTUZ6PcibghN71OmCklCGGMwwMStc0+wz/QPi9RO1BumoN0lVmHdUhoEFql1iQZ6mGbqaQIOq+OMXM2R8Agbill+AAAAA=";

const projects = [
  {
    title: "Projeto 01",
    category: "Direção de arte",
    year: "2026",
    description: "Um case para apresentar conceito, processo criativo e resultado final.",
  },
  {
    title: "Projeto 02",
    category: "Branding",
    year: "2026",
    description: "Identidade visual construída a partir de estratégia, linguagem e sistema gráfico.",
  },
  {
    title: "Projeto 03",
    category: "Campanha",
    year: "2026",
    description: "Campanha integrada com foco em ideia central, desdobramentos e execução visual.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top">K.</a>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Publicidade · Direção de arte · Criação</p>
        <h1>
          Ideias com
          <span> intenção.</span>
        </h1>
        <div className="hero-footer">
          <p>
            Um portfólio em construção para reunir projetos, campanhas, identidades e trabalhos que mostram não só o resultado, mas o raciocínio por trás dele.
          </p>
          <a href="#projetos">Ver projetos ↓</a>
        </div>
      </section>

      <section className="about section" id="sobre">
        <p className="section-index">01 / Sobre mim</p>
        <div className="section-content about-grid">
          <figure className="about-photo">
            <img src={profileImage} alt="Retrato de Kauany Verdi Guerra" />
          </figure>
          <div className="about-story">
            <h2>Sou Kauany Verdi Guerra.</h2>
            <div className="about-copy">
              <p>Oie, seja bem-vindo.</p>
              <p>
                Durante o ensino médio, descobri a publicidade a partir de um hobby: “cuidar do Instagram da escola”. O que parecia apenas uma tarefa simples se transformou na criação de um canal de comunicação de uma escola pública estadual que hoje alcança mais de 18 mil seguidores.
              </p>
              <p>
                Para mim, a publicidade é uma ciência que une minhas duas grandes paixões: criatividade e estratégia.
              </p>
              <p>
                Sou uma publicitária em formação, estou no 6º período de Publicidade e Propaganda na Universidade de Passo Fundo (UPF) e me identifico muito com a parte estratégica por trás de um case publicitário. Pesquisa, planejamento e marketing puro são as áreas que mais gosto de aprender e trabalhar.
              </p>
              <p>
                Atualmente, estagio na Be8 onde atuo com planejamento e atendimento de campanha de endomarketing e comunicação interna e coloco em prática tudo aquilo que aprendo na faculdade.
              </p>
              <p>
                É um prazer ter você por aqui, arraste e confira mais sobre os trabalhos que desenvolvi ao longo da minha trajetória.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects section" id="projetos">
        <p className="section-index">02 / Projetos selecionados</p>
        <div className="section-content">
          {projects.map((project, index) => (
            <article className="project" key={project.title}>
              <span className="project-number">0{index + 1}</span>
              <div>
                <p className="project-meta">{project.category} · {project.year}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <span className="arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contato">
        <p className="section-index">03 / Contato</p>
        <div className="section-content contact-content">
          <h2>Tem uma ideia? Vamos conversar.</h2>
          <p>Adicione aqui seu e-mail, LinkedIn e Instagram quando quiser.</p>
          <a href="mailto:seuemail@exemplo.com">seuemail@exemplo.com ↗</a>
        </div>
      </section>

      <footer>
        <span>Portfolio © 2026</span>
        <a href="#top">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
