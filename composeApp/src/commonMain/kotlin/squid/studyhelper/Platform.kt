package squid.studyhelper

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform