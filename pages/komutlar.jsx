import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Arika | Komutlar</title>
      </Head>
      <div className="w-full min-h-screen">
        <div className="flex justify-center"></div>
        <div className="max-w-6xl w-full flex items-center py-36 gap-12">
          <div className="w-full">
            <center>
              <h1 className="text-3xl font-medium text-white">
                Arika'nın tüm komutlarını tek bir sayfada keşfedin ve kaliteyi
                hissedin.
              </h1>
            </center>
            <div className="hidden lg:block lg:flex-shrink-0">
              <center>
                <img
                  draggable="false"
                  width="700"
                  class="select-none"
                  src="https://partnerbot.xyz/assets/list.svg"
                ></img>
              </center>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <div className="w-full max-w-3xl">
          <div className="flex flex-col w-11/12 mx-auto shadow-lg">
            <div className="-my-12 sm:-mx-6 lg:-mx-2">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden sm:rounded-lg">
                  <div className="min-w-full divide-y divide-gray-800/20">
                    <thead className="bg-[#03020F]">
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider"
                        >
                          Komut
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider"
                        >
                          Seçenekler
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-[#03020F] divide-y divide-gray-700/20">
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /play
                              </div>
                              <div class="text-sm text-gray-300">
                                Şarkıyı Çalmanızı Sağlar.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /karaliste
                              </div>
                              <div class="text-sm text-gray-300">
                                Kullanıcıları karalisteye ekleyin/silin.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /karaliste ekle
                              </div>
                              <div class="text-sm text-gray-300">
                                Karalisteye kullanıcı ekleyin.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /karaliste kaldır
                              </div>
                              <div class="text-sm text-gray-300">
                                Karalisteden kullanıcı silin.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /yazıtura
                              </div>
                              <div class="text-sm text-gray-300">
                                Yazı tura oynayarak paranızı katlayın.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /günlük
                              </div>
                              <div class="text-sm text-gray-300">
                                Günlük olarak rastgele coin ödülü alırsınız.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /eval
                              </div>
                              <div class="text-sm text-gray-300">
                                Kod bloğu çalıştırır.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /yardım
                              </div>
                              <div class="text-sm text-gray-300">
                                Dark Partner hakkında yardım al.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /davet
                              </div>
                              <div class="text-sm text-gray-300">
                                Dark Partner'i sunucuna davet et.{" "}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /partner
                              </div>
                              <div class="text-sm text-gray-300">
                                Partner sistemi ile ilgili tüm işlemler.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /partner ozel-url
                              </div>
                              <div class="text-sm text-gray-300">
                                Sunucunuza özgün bir URL satın alın.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /partner sorumlu-rol
                              </div>
                              <div class="text-sm text-gray-300">
                                Sunucunuzda Partnerler ile ilgilenecek rolü
                                seçin/silin.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /partner yazı
                              </div>
                              <div class="text-sm text-gray-300">
                                Sunucunuza özgün Partner yazısını
                                ayarlayın/silin.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /partner durum
                              </div>
                              <div class="text-sm text-gray-300">
                                Partner durumunuzu açın/kapatın.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /partner kanal
                              </div>
                              <div class="text-sm text-gray-300">
                                Partner kanallarınızı ayarlayın.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /partner sart
                              </div>
                              <div class="text-sm text-gray-300">
                                Partner şartınızı açın/kapatın.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /partner ol
                              </div>
                              <div class="text-sm text-gray-300">
                                Sunucular ile Partner olun.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /partner rastgele
                              </div>
                              <div class="text-sm text-gray-300">
                                Rastgele sunucularla partner olun.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /partner bul
                              </div>
                              <div class="text-sm text-gray-300">
                                Partner arayan sunuculara göz gezdirin.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /partner veri
                              </div>
                              <div class="text-sm text-gray-300">
                                Partner verilerinizi görüntüleyin/silin.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /pay
                              </div>
                              <div class="text-sm text-gray-300">
                                Başka bir kullanıcı ile coininizi paylaşın.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /ping
                              </div>
                              <div class="text-sm text-gray-300">
                                Ping pong!
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /promo
                              </div>
                              <div class="text-sm text-gray-300">
                                Yeni bir promo kodu ekleyin/silin/listeleyin.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /promo ekle
                              </div>
                              <div class="text-sm text-gray-300">
                                Yeni bir promo kodu eklersiniz.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /promo özel
                              </div>
                              <div class="text-sm text-gray-300">
                                Özel kod oluşturursunuz.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /promo kaldır
                              </div>
                              <div class="text-sm text-gray-300">
                                Mevcut promo kodunu silin.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /promo listele
                              </div>
                              <div class="text-sm text-gray-300">
                                Veritabanına kayıtlı tüm promo kodları
                                listelersiniz.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /promo kullan
                              </div>
                              <div class="text-sm text-gray-300">
                                Elinizde olan promo kodunu kullanın.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /istatistik
                              </div>
                              <div class="text-sm text-gray-300">
                                Dark Partner'in anlık verilerini görüntüleyin.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="text-sm font-medium text-white">
                                /topcoin
                              </div>
                              <div class="text-sm text-gray-300">
                                En çok Coine sahip kullanıcıları görüntüleyin.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="px-6">
                              <div class="hover:text-blue-500 transition-all duration-200 cursor-pointer text-sm font-medium text-white">
                                Seçenekler
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
      <div className="w-full h-1 my-3 bg-zinc-500/0 rounded-xl mt-10">
                <div className="w-full hover:bg-zinc-500/5 px-4 my-2 hover:px-4 rounded-lg transition-all duration-200 cursor-pointer border border-white/5 py-5 flex justify-between items-center">
                <div className="flex gap-x-4">
                    <i className="flex items-center bg-violet-500/10 rounded-lg text-xl w-12 h-12 text-violet-600 px-3 py-2 fal fa-arrow-left"></i>
                    <div className="text-left mr-3">
                        <p className="text-lg text-violet-200"><a href="/">Geri dön</a></p>
                        <p className="text-sm text-white/50"><a href="/">Yönlendirilmeden önce geldiğiniz sayfaya geri dönün.</a></p>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
    </>
  );
}
